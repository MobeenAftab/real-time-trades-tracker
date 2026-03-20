import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor() {
    this.loginFormGroup.valueChanges.subscribe((formValue) => {
      console.log(formValue);
    });
  }

  onSubmit() {
    console.log(this.loginFormGroup.value);
  }

  onSubmitSuccess() {
    this.loginFormGroup.markAsUntouched();
    this.loginFormGroup.markAsPristine();
  }

  onEmailBlur() {
    const email = this.loginFormGroup.get('email');
    // email.markAsTouched();
  }
}
