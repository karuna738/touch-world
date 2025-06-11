import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.userService.isAuthenticated()) {
      if (route.url.toString() === '/login') {
        this.router.navigate(['/employees']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}