import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { UserServiceService } from '../services/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(
    private _userService: UserServiceService, private router: Router,
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isUser = this._userService.getUserStatus();
      if (!isUser) {
        this.router.navigate([environment.userLoginUrl]);
      }
      return isUser;
  }
  
  
}


/* 

import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(
    private userService: UserService, private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isUser = this.userService.getUserStatus();
    if (!isUser) {
      this.router.navigate([environment.userLoginUrl]);
    }
    return isUser;
  }

}






*/