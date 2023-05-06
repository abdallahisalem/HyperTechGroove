import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/service/user.service';
import { AppComponent } from 'src/app/component/appcomponent/app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})

export class SignInComponent implements OnInit {
  title = 'SignUp';
  signInForm: FormGroup;
  errorMessage = 'Invalid Credentials';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;
  passwordType = 'password';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.signInForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const signInData = this.signInForm.value;
    console.log(signInData)
    this.userService.createUser(signInData).subscribe(response => {
      console.log(response);
      //handle signin response from the backend
      // alert("Signup Successful!");
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Sign up successful. Welcome!';
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/']);

    },
      (error) => {
        console.error(error);
        // alert("Signup error!");
        // handle error response from the backend
        this.errorMessage = error.error.message;
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}