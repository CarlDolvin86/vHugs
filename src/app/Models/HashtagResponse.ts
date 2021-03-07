import { postResponse } from "./postResponse";

export interface HashtagResponse{
    hashtag:string,
    id:number,
    posts:postResponse[]
}