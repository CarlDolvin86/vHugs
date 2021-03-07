package com.vhugs.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Chat {
  @Id
  @GeneratedValue
  private Long id;

  private String message;
  private String username;

  public Chat(String message, String username) {
    this.message = message;
    this.username = username;
  }

  public Chat() {
  }

  public Long getId() {
    return id;
  }


  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  @Override
  public String toString() {
    return "Chat{" +
      "id=" + id +
      ", message='" + message + '\'' +
      ", username='" + username + '\'' +
      '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Chat chat = (Chat) o;

    if (id != null ? !id.equals(chat.id) : chat.id != null) return false;
    if (message != null ? !message.equals(chat.message) : chat.message != null) return false;
    return username != null ? username.equals(chat.username) : chat.username == null;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (message != null ? message.hashCode() : 0);
    result = 31 * result + (username != null ? username.hashCode() : 0);
    return result;
  }
}
