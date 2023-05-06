import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../autentification/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  title = 'update information';
  updateUser: FormGroup;
  errorMessage = '';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;
  passwordType = 'password';
  user: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.updateUser = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Retrieve user information from local storage
    // this.user = JSON.parse(localStorage.getItem('user'));
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
      // Initialize the form with the user's old information
      this.updateUser = this.formBuilder.group({
        id: [this.user.id],
        firstname: [this.user.firstname, Validators.required],
        lastname: [this.user.lastname, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        username: [this.user.username, Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  onSubmit() {
    const Data = this.updateUser.value;
    console.log(Data)
    this.userService.updateUser(Data.id, Data).subscribe(response => {
      console.log(response);
      //handle signin response from the backend
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Your information has been changed successfuly.';
      this.userService.saveUser(response);

    },
      (error) => {
        console.error(error);
        this.errorMessage = error.error.message;
        this.invalidLogin = true;
        this.loginSuccess = false;
        // handle error response from the backend
      });
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}