import { Component, OnInit } from '@angular/core';
import {HashtagService} from '../../services/hashtag.service';
import {HashtagResponse} from '../../Models/HashtagResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  myHashtags:HashtagResponse[] = [];
  constructor(private hashtagService:HashtagService,private router:Router) { }

  ngOnInit(): void {

    this.hashtagService.getAllHashtags().subscribe((response:HashtagResponse[])=>{
      this.myHashtags = response;
      console.log(this.myHashtags);
    })
  }

  gotoHashtagPosts(id){
      console.log(id);
      this.hashtagService.hashtagId = id;
    this.router.navigate(['hashtagpost']);
  }

}
