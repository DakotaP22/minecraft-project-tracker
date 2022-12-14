import { EnvironmentInjector, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import PocketBase from 'pocketbase';
import { User, Admin } from 'pocketbase';
import { BehaviorSubject } from 'rxjs';
import { AppUser } from 'src/app/model/AppUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private client: any;
  private removeListener: any;
  user$: BehaviorSubject<User | Admin | null>;

  constructor(private cookieSvc: CookieService) {
    const pocketbaseConnectionUrl = environment.pocketbase.url;
    this.client = new PocketBase(pocketbaseConnectionUrl);
    this.user$ = new BehaviorSubject<any>(null);

    this.removeListener = this.client.authStore.onChange(
      async (token: string, model: User | Admin | null) => {
        this.user$.next(model);
      }
    );
    const cookie = this.cookieSvc.get('pocketbase');
    if (cookie) this.client.authStore.loadFromCookie(cookie);
  }

  ngOnDestroy() {
    this.removeListener();
  }

  async registerUser(
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    //create user
    const user = await this.client.users.create({
      email,
      password,
      passwordConfirm,
    });

    await this.client.users.authViaEmail(email, password);

    // set user profile data
    await this.client.records.update('profiles', user.profile.id, {
      username,
    });

    this.client.authStore.clear();
    await this.client.users.authViaEmail(email, password);
  }

  async login(email: string, password: string) {
    await this.client.users.authViaEmail(email, password);
  }

  async loginAndPersist(email: string, password: string) {
    await this.client.users.authViaEmail(email, password);
    const cookie = this.client.authStore.exportToCookie();
    this.cookieSvc.set('pocketbase', cookie);
  }

  async getProfile(id: string) {
    return await this.client.records.getOne('profiles', id);
  }
}
