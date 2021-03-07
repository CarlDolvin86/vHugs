import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {chatResponse} from '../Models/chatResponse';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  getAllChats():Observable<chatResponse[]>{
  return this.http.get<chatResponse[]>(`http://localhost:8080/getChats`)
  }

  addChat(chat):Observable<chatResponse>{
    return this.http.post<chatResponse>(`http://localhost:8080/addChat`,chat)
  }
}
