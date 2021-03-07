import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {replyData} from '../Models/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  


  constructor(private http:HttpClient) { }
  getAllRepliesPerPost(id):Observable<replyData[]>{
      return this.http.get<replyData[]>(`http://localhost:8080/${id}/getReplies`)
  }

  addReplyToData(id,reply){
   
    return this.http.patch(`http://localhost:8080/${id}/replies`,reply,{
      headers: {
        "Content-type":"application/json",
      }
    })
    
  }
}
