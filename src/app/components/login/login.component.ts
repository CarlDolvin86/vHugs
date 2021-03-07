import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl:  './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AuthButtonComponent {
  username:string;
  constructor(public auth: AuthService, private router:Router, private loginService:LoginService) {}
  loginWithRedirect(){
    // this.loginService.isUserLoggedIn=true;
    // this.loginService.userAuthLoggedIn = true;
    // console.log(this.loginService.userAuthLoggedIn)
    this.auth.loginWithRedirect({redirect_uri:'http://localhost:4200/post'});
     }


  handleLogin(){
    this.loginService.setUsername(this.username);
    console.log('username is: ' + this.loginService.getUsername());
    this.loginService.isUserLoggedIn = true;
    this.loginService.notLoggedIn = false;
    this.router.navigate(['post'])
  }


}
