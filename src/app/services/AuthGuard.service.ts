import { UserService } from './user-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    //check for logged user, if there isn't one - redirect to login
    const loggedUser = this.userService.loggedUser;
    if (!loggedUser.id) {
      this.router.navigateByUrl('login');
      return false;
    } else {
      return true;
    }
  }
}
