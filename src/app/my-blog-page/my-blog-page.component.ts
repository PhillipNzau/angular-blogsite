import { Component, OnInit } from '@angular/core';
import { Blog } from '../types';
import {BlogsService} from '../blogs.service';


@Component({
  selector: 'app-my-blog-page',
  templateUrl: './my-blog-page.component.html',
  styleUrls: ['./my-blog-page.component.css']
})
export class MyBlogPageComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    private blogsService: BlogsService,
  ) { }

  ngOnInit(): void {
    this.blogsService.getBlogs()
      .subscribe(blogs => {
        this.blogs = blogs;
      });
  }

  onDeleteClocked(blogId: string): void {
    this.blogsService.deleteBlog(blogId)
      .subscribe(() => {
        this.blogs = this.blogs.filter(
          blog => blog.id !== blogId
        );
      });
  }

}
