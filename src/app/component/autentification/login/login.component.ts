import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LogInComponent {
  title = 'login';
  logInForm: FormGroup;
  errorMessage = 'ERR_CONNECTION_REFUSED';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;
  passwordType = 'password';
  user = '';

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.logInForm = this.formBuilder.group({
      identifier: ['', [Validators.required]],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  onSubmit() {
    const logInData = this.logInForm.value;
    this.userService.login(logInData.identifier, logInData.password).subscribe({
      next: (response) => {
        console.log(response);
        // alert("loggin Successful!");
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login successful. Welcome!';
        this.userService.saveUser(response);
        //handle login response from the backend

      },
      error: (error) => {
        console.error(error);
        // alert("loggin error!");
        if(error.error.message)this.errorMessage = error.error.message
        ;
        this.invalidLogin = true;
        this.loginSuccess = false;
        // handle error response from the backend
      }
    });
  }


  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
