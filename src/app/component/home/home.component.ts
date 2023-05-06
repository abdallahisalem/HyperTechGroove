import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:any;

  constructor(private userService:UserService, private router:Router){
  }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout(){
    this.userService.logout()
    this.router.navigate(['/test']);
  }
}
