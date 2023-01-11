import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  navButton: string = 'login';
  switch: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.switch = !this.switch;
    }, 5000);
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
  }

  change() {
    this.switch = !this.switch;
  }
}
