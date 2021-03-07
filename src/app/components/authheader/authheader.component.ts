import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authheader',
  templateUrl: './authheader.component.html',
  styleUrls: ['./authheader.component.css']
})
export class AuthheaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
