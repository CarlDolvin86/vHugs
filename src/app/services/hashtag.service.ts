import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HashtagResponse } from '../Models/HashtagResponse';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {
  hashtagId:number;

  constructor(private http:HttpClient) { }

  getAllHashtags():Observable<HashtagResponse[]>{
    return this.http.get<HashtagResponse[]>(`http://localhost:8080/getHashtags`);
  }

  getPostHashtag(id):Observable<HashtagResponse>{
    return this.http.get<HashtagResponse>(`http://localhost:8080/getHashtag/${id}`)
  }

  getPostsByTag(id):Observable<HashtagResponse>{
    return this.http.get<HashtagResponse>(`http://localhost:8080/getPostByTag/${id}`)
  }

  setHashtagId(id){
    this.hashtagId = id;
  }
}
