import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable()
export class BlogService {

  postsCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore, private router: Router, private toastr: ToastrService) {
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('PublishDate', 'desc'));
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

   addPost(post: Post){
     this.postsCollection.add(post).then(
      response => {
        this.toastr.success("Blog post created!", "Success");
        this.router.navigate(['/blog']);
      }
    )
    .catch(
      error => {
        this.toastr.error(error.message, "Error");
      }
    );
   }

  deletePost(post: Post){
    this.postDoc = this.afs.doc(`posts/${post.Id}`);
    this.postDoc.delete();
    
  }
}
