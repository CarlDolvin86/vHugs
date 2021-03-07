import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { chatResponse } from 'src/app/Models/chatResponse';
import { ChatService } from 'src/app/services/chat.service';
import {LoginService} from '../../services/login.service';

export class myChat{
  constructor(
    public message:string,
    public username:string
    ){}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor(private chatService:ChatService,private loginService:LoginService,public auth:AuthService) { }
chatArr:chatResponse[] = [];
message:string;
user:string;

  ngOnInit(): void {
    this.getAllChats();
    if(this.loginService.userAuthLoggedIn){
      this.auth.user$.subscribe(data=>{
        console.log(data);
        this.user = data.name;
      })
    }
  
  }

  addChat(){
    const chat = new myChat(this.message,this.loginService.getUsername())

    this.chatService.addChat(chat).subscribe(data=>{
      console.log(data)
      this.getAllChats();
    });

    this.message = '';
     
      
  }

  getAllChats(){
    this.chatService.getAllChats().subscribe((data:chatResponse[])=>{
      console.log(data);
      this.chatArr = data;
      
    })
  }

}
