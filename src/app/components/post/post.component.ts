import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { postResponse } from '../../Models/postResponse';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '@auth0/auth0-angular';
import {HashtagService} from '../../services/hashtag.service';
import {HashtagResponse} from '../../Models/HashtagResponse';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: postResponse[] = [];
  postBody: any;
  keywordsArr = [];
  uploadArr = [];
  myHashtags:HashtagResponse[] = [];
  constructor(
    public postService: PostService,
    private router: Router,
    private uploadFileService: UploadFileService,
    public loginService:LoginService,
    public auth:AuthService,
    public hashtagService:HashtagService
  ) {}

  ngOnInit(): void {
    this.loginService.checkIfUserLoggedIn();
    this.getHashtags();
    this.getAllPosts();
    this.getAllFiles();
    if(this.loginService.userAuthLoggedIn){
      
      this.auth.user$.subscribe(data=>{
        this.loginService.setUsername(data.name)
        console.log(this.loginService.getUsername())
      })
    } else if(this.loginService.isUserLoggedIn){
        this.loginService.setUsername(this.loginService.getUsername())
    }
 
  }

  getAllFiles() {
    this.uploadFileService.getFiles().subscribe((data) => {
      console.log(data);
      this.uploadArr = data;
    });
  }

  goToSinglePost(id) {
    this.postService.setId(id);
    this.router.navigate(['singlepost']);
  }
  addPost() {
    this.router.navigate(['addpost']);
  }

  addHug(id) {
    this.postService.addHug(id).subscribe((data) => {
      this.getAllPosts();
    });
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((posts: postResponse[]) => {
      this.posts = posts;
      this.posts.reverse();
      this.posts.forEach((post) => {
        this.postBody = post.body.split(/\s+/);

        this.postBody.forEach((word) => {
          const newWord = word.replace(/[^0-9a-z]/gi, '');

          this.postService.keywords.forEach((keyword) => {
            if (
              newWord.toUpperCase() == keyword.word.toUpperCase() &&
              !this.keywordsArr.includes(keyword)
            ) {
              this.keywordsArr.push(keyword);
            }
          });
        });
      });
    });
  }

  getHashtags(){
    this.hashtagService.getAllHashtags().subscribe((response:HashtagResponse[])=>{
      this.myHashtags = response;
      console.log(this.myHashtags);
    })
  }

  gotoHashtagPosts(event:any){
    
    this.hashtagService.hashtagId = event.target.value;
  this.router.navigate(['hashtagpost']);
}
}