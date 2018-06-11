import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';
import { PagerService } from '../../services/pager.service';

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

  pager: any = {};
  pagedItems: any[];

  constructor(private blogService: BlogService,private pagerService: PagerService) {
    this.sub = new Subscription();
  }

  ngOnInit() {

    this.isEdit = false;
    this.currentUserId = sessionStorage.getItem("currentUser");
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    
}

  getPosts(){
    this.sub = this.blogService.getPosts().subscribe(x => {
      this.posts = x;
      this.setPage(1);
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