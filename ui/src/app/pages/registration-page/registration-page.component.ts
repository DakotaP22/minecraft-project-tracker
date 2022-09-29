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
  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: unknown) {
    console.log(event);
  }
}
