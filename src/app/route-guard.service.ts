import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router:Router,private loginService:LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginService.isUserLoggedIn || this.loginService.userAuthLoggedIn){
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }
  // return true;
}
