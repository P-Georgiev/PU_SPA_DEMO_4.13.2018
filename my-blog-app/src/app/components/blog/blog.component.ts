import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  posts: Post[];
  private sub: Subscription;
  constructor(private blogService: BlogService) {
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPosts(){
    this.sub = this.blogService.getPosts().subscribe(x => {
      this.posts = x;
    });
  }

}