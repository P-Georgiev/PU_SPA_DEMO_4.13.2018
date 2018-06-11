import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Post } from '../../../models/post.model';
import { NgForm } from '@angular/forms';
import { timestamp } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = {
    Id: '',
    Title: '',
    Description: '',
    ImageSrc: '',
    ArticleUrl: '',
    PublishDate: '',
    UserId: ''
  }
  today: Date;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  createPost(form: NgForm){
    this.post.Title = form.value.title;
    this.post.Description = form.value.description;
    this.post.ImageSrc = form.value.imageSrc;
    this.post.ArticleUrl = form.value.articleUrl;
    let today = new Date();
    let date = this.addZero(today.getDate()) + '.' + this.addZero(today.getMonth()+1) + '.' + this.addZero(today.getFullYear());
    let time = this.addZero(today.getHours()) + ":" + this.addZero(today.getMinutes()) + ":" + this.addZero(today.getSeconds());
    let dateTime = date+'  '+time;
    this.post.PublishDate = dateTime;
    this.post.UserId = firebase.auth().currentUser.uid;
    if(this.post.Title != '' && this.post.Description !='' && this.post.ImageSrc != '' && this.post.ArticleUrl !=''){
      this.blogService.addPost(this.post);
    }
  }

  addZero(i){
    if (i < 10) {
      i = "0" + i;
    }
  return i;
  }

}
