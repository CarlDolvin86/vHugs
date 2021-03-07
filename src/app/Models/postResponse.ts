import { Reply } from "../components/singlepost/singlepost.component";

export interface postResponse{
    id:number,
    subject:string,
    body:string,
    hugs:number,
    replies:Reply[]
}