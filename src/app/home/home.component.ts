import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /**
   * Variable declaration
   */
  navButton: string = 'login';
  /**
   * On Initialization it will check for user authentication
   * if user is authenticated then change navButton to Logout
   * otherwise Login.
   */
  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
  }
}
