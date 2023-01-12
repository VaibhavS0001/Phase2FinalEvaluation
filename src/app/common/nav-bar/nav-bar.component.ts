import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  title = 'InstaSMart';
  links: Array<string> = [
    '/products/productList/fruits',
    '/products/productList/veges',
    '/products/productList/electronics',
  ];
  @Input() route!: string;
  @Input() buttons: string = 'Login';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  LogIn_Logout() {
    if (this.buttons == 'Logout') {
      sessionStorage.setItem('isAuthenticated', 'false');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('loggedInUser');
      this.router.navigate(['']);
    } else if (this.buttons == 'Login') {
      this.router.navigate(['']);
    }
  }
}
