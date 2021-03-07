// import { Component, Inject, OnInit } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';
// import { DOCUMENT } from '@angular/common';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';

// @Component({
//   selector: 'app-auth-button',
//   template: `
//     <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
//       <button (click)="auth.logout({ returnTo: document.location.origin })">
//         Log out
//       </button>
//     </ng-container>

//     <ng-template #loggedOut>
//       <button (click)="auth.loginWithRedirect()">Log in</button>
//     </ng-template>
//   `,
//   styles: [],
// })
// export class AuthOutButtonComponent implements OnInit{
//   constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService,public router:Router,public loginService:LoginService) {}

//   ngOnInit(){
//     this.loginService.isUserLoggedIn = false;
//     this.loginService.userAuthLoggedIn = false;
//     this.router.navigate(['login'])
//   }

// }

  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public loginService:LoginService,private router:Router,public auth:AuthService) { }
 
  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.loginService.isUserLoggedIn = false;
    this.loginService.userAuthLoggedIn = false;
    this.loginService.notLoggedIn = true;
    console.log(this.loginService.userAuthLoggedIn);
    this.router.navigate(['login'])
  }

}