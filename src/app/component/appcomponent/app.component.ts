import { UserService } from 'src/app/service/user.service';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'MyApp';
  showMessage = false;

  ngOnInit() {
  }

  constructor(private router: Router, private userService: UserService) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Navigation has started
        this.showMessage = false;
      } else if (event instanceof NavigationEnd) {
        // Navigation has ended successfully
        this.showMessage = !this.router.routerState.snapshot.root.firstChild;
      } else if (event instanceof NavigationError) {
        // Navigation has failed
        this.showMessage = false;
      } else if (event instanceof NavigationCancel) {
        // Navigation has been cancelled
        this.showMessage = false;
      }
    });
  }

  handleLogout() {
    this.userService.logout();
  }
}