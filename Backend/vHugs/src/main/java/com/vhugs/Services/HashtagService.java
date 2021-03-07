package com.vhugs.Services;


import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Repos.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HashtagService {
  private Hashtag hashtag;
//
//  public HashtagService(Hashtag hashtag) {
//    this.hashtag = hashtag;
//  }
//
//  public HashtagService() {
//  }

  @Autowired
  private HashtagRepository hashtagRepository;

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private PostService postService;


  public void addPostToHashtag(Long tagId,Long postId){
    Hashtag newTag = hashtagRepository.findById(tagId).get();
    newTag.addPostToTag(postRepository.findById(postId).get());

  }




}
