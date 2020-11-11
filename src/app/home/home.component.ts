import { Component, OnInit } from '@angular/core';
import { Blog } from '../types';
// import { BlogsService } from '../blogs.service';
import { fakeBlogs } from '../fake-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    // private blogService: BlogsService,
  ) { }

  ngOnInit(): void {
    // this.blogService.getBlogs()
    //   .subscribe(blogs => {
    //     this.blogs = blogs;
    //   });
    this.blogs = fakeBlogs;

  }

}
