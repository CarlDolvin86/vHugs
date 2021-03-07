package com.vhugs.Controllers;

import com.vhugs.Models.Chat;
import com.vhugs.Repos.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ChatController {

  @Autowired
  private ChatRepository chatRepository;

  @GetMapping("/getChats")
  public Iterable<Chat> getAllChats(){
    return chatRepository.findAll();
  }

  @PostMapping("/addChat")
  public Chat addChat(@RequestBody Chat chat){
    return chatRepository.save(chat);
  }
}
