import { Router } from '@angular/router';
import { AppComponent } from './../../appcomponent/app.component';
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
  errorMessage = 'Invalid Credentials';
  successMessage: string ="";
  invalidLogin = false;
  loginSuccess = false;

  constructor(private userService: UserService,private formBuilder: FormBuilder, private router:Router) {
    this.logInForm = this.formBuilder.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', Validators.required]
      });
  }

  onSubmit() {
    const logInData = this.logInForm.value;

    this.userService.login(logInData.username,logInData.password).subscribe(response => {
      console.log(response);
      alert("loggin Successful!");

      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/']);
      //handle login response from the backend
    },
      (error) => {
        console.error(error);
        alert("loggin error!");
        this.invalidLogin = true;
        this.loginSuccess = false;
        // handle error response from the backend
      });
  }
}