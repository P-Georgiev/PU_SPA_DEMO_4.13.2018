import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  posts: Post[];
  sub: Subscription;
  isEdit: Boolean;
  currentUserId: string;
  postToEdit: Post = {
    Id: '',
    Title: '',
    Description: '',
    ImageSrc: '',
    ArticleUrl: '',
    PublishDate: '',
    UserId: ''
  };

  constructor(private blogService: BlogService) {
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.getPosts();
    this.isEdit = false;
    this.currentUserId = firebase.auth().currentUser.uid;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPosts(){
    this.sub = this.blogService.getPosts().subscribe(x => {
      this.posts = x;
    });
  }

  deletePost(post: Post){
    this.blogService.deletePost(post);
  }

  onEdit(post: Post){
    this.isEdit = true;
    this.postToEdit = post;
  }

  editPost(post: Post){
    this.blogService.editPost(post);
    this.isEdit = false;
  }

}