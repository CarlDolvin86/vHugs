import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {postResponse} from '../Models/postResponse';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  singlePost:postResponse;
  id:number;
  

  keywords = [
    {word: 'mental',link:'mhRes' },
    {word: 'food',link:'insecurity'},
    {word: 'financial',link:'financial'},
    {word: 'money',link:'financial'},
    {word: 'finances',link:'financial'},
    {word: 'shelter',link:'insecurity'},
    {word: 'housing',link:'insecurity'},
    {word: 'apartment',link:'insecurity'},
    {word: 'homeless',link:'insecurity'},
    {word: 'clothing',link:'insecurity'},
    {word: 'crime',link:'crimeRes'},
    {word: 'transportation',link:'transportation'},
    {word: 'car',link:'transportation'},
    {word: 'bus',link:'transportation'},
    {word: 'class',link:'classRes'},
    {word: 'law',link:'insecurity'},
    {word: 'lawyer',link:'insecurity'},
  ]
  
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<postResponse[]>{
    return this.http.get<postResponse[]>(`http://localhost:8080/posts`)
  }

  getSinglePost(postId):Observable<postResponse>{
    return this.http.get<postResponse>(`http://localhost:8080/${postId}/post`)
  }

  setSinglePost(post){
    this.singlePost = post;
  }

  getSinglePostData(){
    return<postResponse> this.singlePost;
  }

  addPost(post):any{
    return this.http.post(`http://localhost:8080/posts`,post);
  }

  getId(){
    return this.id;
  }
  setId(id){
    this.id = id;
  }

  addHug(id){
      return this.http.get(`http://localhost:8080/${id}/addHug`)
  }

  addHashtagToPost(tagId,postId){
    return this.http.get(`http://localhost:8080/addHashtag/${tagId}/${postId}`);
  }

 
  
}
