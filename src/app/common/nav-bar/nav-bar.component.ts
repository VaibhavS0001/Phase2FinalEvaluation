import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartListService } from 'src/app/services/cart/cart-list.service';

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
  badge: number = 0;

  constructor(private router: Router, private cartService: CartListService) {}

  ngOnInit(): void {
    this.badge = this.cartService.getProduct().products.length
  }

  LogIn_Logout() {
    if (this.buttons == 'Logout') {
      sessionStorage.setItem('isAuthenticated', 'false');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('loggedInUser');
      setTimeout(() => {
        this.router.navigate(['/home'], {replaceUrl: true});
      }, 0.5);
      this.router.navigate(['']);
    } else if (this.buttons == 'Login') {
      this.router.navigate([''], {replaceUrl: true});
    }
  }
}
