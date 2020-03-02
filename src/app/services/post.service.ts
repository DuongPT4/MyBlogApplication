import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable()
export class PostService{
    getPost():Promise<Post[]>{
        return Promise.resolve(POSTS);
    }
}

export const POSTS = [
    {id:1, title:'Post One', body:'This is Post One'},
    {id:2, title:'Post Two', body:'This is Post Two'},
    {id:3, title:'Post Three', body:'This is Post Three'},
    {id:4, title:'Post Four', body:'This is Post Four'}
]