import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
@Injectable()
export class BlogService {

  postsCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.posts = this.afs.collection('posts').valueChanges() as Observable<Post[]>;
   }

   getPosts(){
     return this.posts;
   }
}
