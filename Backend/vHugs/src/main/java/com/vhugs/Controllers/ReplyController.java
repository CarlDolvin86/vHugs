package com.vhugs.Controllers;

import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import com.vhugs.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
public class ReplyController {

    @Autowired
    private ReplyRepository replyRepository;

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @PatchMapping("/{id}/replies")
    public Post addReply(@RequestBody Reply reply,@PathVariable Long id){
        return postService.addReplyToPost(reply,id);

    }

    @GetMapping("/{id}/getReplies")
    public Collection<Reply> addReply(@PathVariable Long id){
        return postService.retrievePostById(id).getReplies();

    }


}
