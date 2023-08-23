import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    const isAuthenticated = Boolean(localStorage.getItem('email_GV'));

    if (isAuthenticated) {
      return true;
    } else {
      return this.router.parseUrl('');
    }
  }
}

