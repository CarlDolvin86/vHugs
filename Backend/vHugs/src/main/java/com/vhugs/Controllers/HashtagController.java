package com.vhugs.Controllers;

import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Services.HashtagService;
import com.vhugs.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController

public class HashtagController {

  @Autowired
  private HashtagRepository hashtagRepository;

  @Autowired
  private HashtagService hashtagService;

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private PostService postService;

  @GetMapping("/getHashtags")
  public Iterable<Hashtag> getAllHashtags(){
    return hashtagRepository.findAll();
  }

  @GetMapping("/addHashtag/{tagId}/{postId}")
  public Hashtag addHashtagToPost(@PathVariable Long tagId, @PathVariable Long postId){
    hashtagService.addPostToHashtag(tagId,postId);
    hashtagRepository.save(hashtagRepository.findById(tagId).get());
    return hashtagRepository.findById(tagId).get();
  }

  @GetMapping("/getHashtag/{id}")
  public Iterable<Hashtag> getSinglePostHashtag(@PathVariable Long id){
//    return postService.retrievePostById(id).getHashtags();
    return postRepository.findById(id).get().retrieveHashtags();
  }

  @GetMapping("getPostByTag/{id}")
  public Hashtag getPostByTag(@PathVariable Long id){
    return hashtagRepository.findById(id).get();
  }
}
