import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loginService:LoginService,public auth:AuthService){}
  title = 'vhugs';
}
