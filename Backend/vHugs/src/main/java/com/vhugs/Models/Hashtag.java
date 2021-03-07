package com.vhugs.Models;


import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class Hashtag {
  private String hashtag;

  @Id
  @GeneratedValue
  private Long id;
  @ManyToMany
  private Collection<Post> posts;

  public Hashtag(String hashtag,Post... posts) {
    this.hashtag = hashtag;
    this.posts = List.of(posts);
  }

  public Hashtag() {
  }

  public void addPostToTag(Post post){
    posts.add(post);
  }

  public String getHashtag() {
    return hashtag;
  }

  public void setHashtag(String hashtag) {
    this.hashtag = hashtag;
  }

  public Collection<Post> getPosts() {
    return posts;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Override
  public String toString() {
    return "Hashtag{" +
      "hashtag='" + hashtag + '\'' +
      ", id=" + id +
      '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Hashtag hashtag1 = (Hashtag) o;

    if (hashtag != null ? !hashtag.equals(hashtag1.hashtag) : hashtag1.hashtag != null) return false;
    if (id != null ? !id.equals(hashtag1.id) : hashtag1.id != null) return false;
    return posts != null ? posts.equals(hashtag1.posts) : hashtag1.posts == null;
  }

  @Override
  public int hashCode() {
    int result = hashtag != null ? hashtag.hashCode() : 0;
    result = 31 * result + (id != null ? id.hashCode() : 0);
    result = 31 * result + (posts != null ? posts.hashCode() : 0);
    return result;
  }
}
