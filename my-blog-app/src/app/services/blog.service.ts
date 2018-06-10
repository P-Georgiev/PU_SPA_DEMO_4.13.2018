import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class BlogService {

  postsCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.snapshotChanges().pipe(map(x => {
      return x.map(a => {
        const data = a.payload.doc.data() as Post;
        data.Id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getPosts(){
     return this.posts;
   }
}
