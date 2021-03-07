package com.vhugs;

import com.vhugs.Models.Chat;
import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.ChatRepository;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private PostRepository postRepo;

    @Autowired
    private ReplyRepository replyRepo;

    @Autowired
    private HashtagRepository hashtagRepository;

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public void run(String... args) throws Exception {
      Reply firstReply = new Reply("Hang in there!");
      Reply secondReply = new Reply("Sending you hugs!");
      Reply thirdReply = new Reply("Check the uploads - I left something there");
      Reply fourthReply = new Reply("Kids are amazing and exhausting - I feel your pain! Let it dry, way easier to pick up");
      Reply fifthReply = new Reply("Everyday! You're not alone, we'll get through this together.");
      Reply sixthReply = new Reply("Yes! We rock and we are strong together!");
      Reply seventhReply = new Reply("My heart goes out to you. When I was furloughed, I reached out to EDEN/CHN for rent help");
      Reply eighthReply = new Reply("I have a few degrees and a LOT of debt... if you can get scholarships go for it! But you might find a company that helps pay");
      replyRepo.save(firstReply);
      replyRepo.save(secondReply);
      replyRepo.save(thirdReply);
      replyRepo.save(fourthReply);
      replyRepo.save(fifthReply);
      replyRepo.save(sixthReply);
      replyRepo.save(seventhReply);
      replyRepo.save(eighthReply);

      Hashtag tag1 = new Hashtag("#Help");
      Hashtag tag2 = new Hashtag("#Advice");
      Hashtag tag3 = new Hashtag("#INeedAHug");
      Hashtag tag4 = new Hashtag("#FreeHugs");
      Hashtag tag5 = new Hashtag("#Contact");
      Hashtag tag6 = new Hashtag("#INeedAnAdult");
      Hashtag tag7 = new Hashtag("#Coding");
      Hashtag tag8 = new Hashtag("#SpringBoard");
      hashtagRepository.save(tag1);
      hashtagRepository.save(tag2);
      hashtagRepository.save(tag3);
      hashtagRepository.save(tag4);
      hashtagRepository.save(tag5);
      hashtagRepository.save(tag6);
      hashtagRepository.save(tag7);
      hashtagRepository.save(tag8);

      Post firstPost = new Post("This bootcamp is hard!","The Bootcamp is really hard! I am struggling to learn TDD.",firstReply);
      Post secondPost = new Post("My car broke down today","I am not sure how I will get to work without a car! It is so expensive to fix.",secondReply);
      Post thirdPost = new Post("Why is Gitbash so hard?", "I am having so much trouble keeping Git commands straight. Anyone have any ideas?",thirdReply);
      Post fourthPost = new Post("Kids -_-\n","Noodles are wet, rice is too\n" +
        "These kids never sleep\n" +
        "Are you up too?\n",fourthReply);
      Post fifthPost = new Post("Coding is hard","This is like drinking from a water hose. Anyone else overwhelmed? I don’t know if I can do this.",fifthReply);
      Post sixthPost = new Post("Today was awesome!","I feel really lucky to be in a cohort with you all. We’ve got this!",sixthReply);
      Post seventhPost = new Post("Not sure what to do","I just lost my job and I don’t even know where to begin. I don’t know what I’ll do for money or how to apply for anything.",seventhReply);
      Post eighthPost = new Post("School or no school?","Bootcamp has been an amazing experience and I just want to learn more. I want to start working, but I’m really thinking of going back to school for a CS degree - what would you do?",eighthReply);


      postRepo.save(firstPost);
      postRepo.save(secondPost);
      postRepo.save(thirdPost);
      postRepo.save(fourthPost);
      postRepo.save(fifthPost);
      postRepo.save(sixthPost);
      postRepo.save(seventhPost);
      postRepo.save(eighthPost);

      Chat chat1 = new Chat("Hello friends!","Mike");
      Chat chat2 = new Chat("Hello There mike! How are you?","Tina");

      chatRepository.save(chat1);
      chatRepository.save(chat2);
    }
}
