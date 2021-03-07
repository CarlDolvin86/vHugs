import { Component, OnInit } from '@angular/core';
import { HashtagResponse } from 'src/app/Models/HashtagResponse';
import { postResponse } from 'src/app/Models/postResponse';
import { HashtagService } from 'src/app/services/hashtag.service';

@Component({
  selector: 'app-hashtag-post',
  templateUrl: './hashtag-post.component.html',
  styleUrls: ['./hashtag-post.component.css']
})
export class HashtagPostComponent implements OnInit {
hashtag:HashtagResponse;
posts:postResponse[] = [];
displayTag:string;
  constructor(private hashtagService:HashtagService) { }

  ngOnInit(): void {
    console.log(this.hashtagService.hashtagId)
    this.hashtagService.getPostsByTag(this.hashtagService.hashtagId).subscribe((response:HashtagResponse) =>{
        this.hashtag = response;
        this.displayTag = this.hashtag.hashtag;
        // this.posts = response;
        console.log(this.displayTag);
        this.posts = response.posts;
    })
  }

}
