import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationCarouselComponent } from './components/registration-carousel/registration-carousel.component';
import { UserService } from 'src/app/core/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RegistrationFormComponent,
    RegistrationCarouselComponent,
  ],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(event: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) {
    await this.userSvc.registerUser(
      event.username,
      event.email,
      event.password,
      event.confirmPassword
    );
    this.router.navigate(['']);
  }
}
