import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AppComponent } from '../appcomponent/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMessage = false;

  isLoggedIn;
  constructor(private userService: UserService){
    this.isLoggedIn = userService.isLoggedIn();
    console.log(this.isLoggedIn);
  }
  ngOnInit() {
  }
  logout(){
    this.userService.logout();
  }
}
