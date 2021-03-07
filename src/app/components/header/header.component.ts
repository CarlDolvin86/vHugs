import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService,public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(data=>{
      console.log(data)
    })
   
    
  }

}
