import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  isUserAuthenticated(): boolean {
    return Boolean(localStorage.getItem('isLoggedIn_GV'));
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn_GV');
    this.router.navigate(['']);
  }
}
