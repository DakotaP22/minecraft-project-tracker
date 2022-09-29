import { Component } from '@angular/core';
import { User, Admin, Record } from 'pocketbase';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './core/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';
  user$: BehaviorSubject<any>;

  constructor(private userSvc: UserService) {
    this.user$ = userSvc.user$;

    this.user$.subscribe((user: User | Admin | null) => {
      console.log('user', user);
    });
  }

  displayUserName(user: User | Admin | null) {
    if (!user) return undefined;
    else if (user instanceof User) {
      return user.profile ? user.profile['username'] : undefined;
    } else {
      return 'Admin';
    }
  }
}
