package com.vhugs.Controllers;

import com.vhugs.Models.Post;
import com.vhugs.Repos.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
public class PostController {
    @Autowired
    private PostRepository postRepo;

    @GetMapping("/posts")
    public Iterable<Post> getAllPosts(){
        return postRepo.findAll();
    }

    @PostMapping("/posts")
    public Post addNewPost(@RequestBody Post newPost){
        newPost.setHugs(0);
        postRepo.save(newPost);
        return newPost;

    }

    @GetMapping("/{id}/post")
    public Post getSinglePost(@PathVariable Long id){
        return postRepo.findById(id).get();
    }

    @GetMapping("{id}/addHug")
    public Iterable<Post> addHugToPost(@PathVariable Long id){
       Post postToMod = postRepo.findById(id).get();
       postToMod.addHug();
       postRepo.save(postToMod);
        return postRepo.findAll();
    }
}
