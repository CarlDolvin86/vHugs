import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
username:string;
isUserLoggedIn = false;
authData:any;
notLoggedIn = true;
userAuthLoggedIn = false;
  constructor() { }
  setUsername(username){
    this.username = username;
  }

  checkIfUserLoggedIn(){
    if(!this.isUserLoggedIn){
      this.userAuthLoggedIn = true;
      this.notLoggedIn = false;
    }
  }

  getUsername(){
    return this.username;
  }

  userAuthUsername(name){
    this.username = name;
  }

  getAuthData(){
    return this.authData;
  }


}
