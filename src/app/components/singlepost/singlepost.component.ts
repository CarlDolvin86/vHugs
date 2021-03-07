import { Component, OnInit } from '@angular/core';
import { postResponse } from 'src/app/Models/postResponse';
import { PostService } from 'src/app/services/post.service';
import {ReplyService} from '../../services/reply.service';
import {replyData} from '../../Models/reply';
import { HashtagService } from 'src/app/services/hashtag.service';

export class Reply{
  constructor(
    public message:string
  ){}
}

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
 

singlePostData = {} as postResponse;
myArray = [];
replies:replyData[] = [];
replyText:string;
id:number;
reply: Reply;
hashtag:any;
  constructor(public postService:PostService,public replyService:ReplyService,public HashtagService:HashtagService) { }

  ngOnInit(): void {
    this.id = this.postService.getId();
    this.postService.getSinglePost(this.id).subscribe(((singlePost:postResponse) =>{
      this.singlePostData = singlePost;
      // this.myArray.push(this.singlePostData);
      console.log(this.singlePostData);
    }))
    this.replyService.getAllRepliesPerPost(this.id).subscribe((replies:replyData[]) =>{
      this.replies = replies;
      console.log(replies);
      
    })

    this.getHashtag();
    
  }

  addReply(){
    this.reply = new Reply(this.replyText);
    
    this.replyService.addReplyToData(this.id,this.reply).subscribe(data=>{
      console.log(data);
      this.getAllReplies();
    })
    this.replyText='';
  }

  getAllReplies(){
    this.replyService.getAllRepliesPerPost(this.id).subscribe(reply =>{
      
      console.log(reply);
      this.replies = reply;
      console.log(this.replies)
    })
  }

  getHashtag(){
    this.HashtagService.getPostHashtag(this.id).subscribe(response =>{
      this.hashtag = response;
      console.log(response);
    })
  }

}