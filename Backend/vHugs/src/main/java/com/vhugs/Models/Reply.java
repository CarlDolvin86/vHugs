package com.vhugs.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Reply {

    @Id
    @GeneratedValue
    private Long id;
    private String message;

    @ManyToMany(mappedBy = "replies")
    private Collection<Post> postReplies;

    public Reply(String message) {
        this.message = message;
    }

    public Reply() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }




    @Override
    public String toString() {
        return "Reply{" +
                "message='" + message + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Reply reply = (Reply) o;

        if (id != null ? !id.equals(reply.id) : reply.id != null) return false;
        if (message != null ? !message.equals(reply.message) : reply.message != null) return false;
        return postReplies != null ? postReplies.equals(reply.postReplies) : reply.postReplies == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (message != null ? message.hashCode() : 0);
        result = 31 * result + (postReplies != null ? postReplies.hashCode() : 0);
        return result;
    }
}

