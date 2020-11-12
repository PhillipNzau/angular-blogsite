import { Component, OnInit } from '@angular/core';
import { Blog } from '../types';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    private blogsService: BlogsService,
  ) { }

  ngOnInit(): void {
    this.blogsService.getBlogs()
      .subscribe(blogs => {
        this.blogs = blogs;
      });
    // this.blogs = this.blogService.getBlogs();

  }

}
