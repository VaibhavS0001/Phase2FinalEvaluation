import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  /**
   * Variable declarations
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
