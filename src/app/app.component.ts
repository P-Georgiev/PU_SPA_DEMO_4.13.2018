import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Post } from './model/post';
import { PostService } from './services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: Post[];

  /**
   *
   */
  constructor(private postService : PostService) {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }
}
