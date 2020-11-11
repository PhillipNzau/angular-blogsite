import { Component, OnInit } from '@angular/core';
import { fakeBlogs } from '../fake-data';
import { Blog } from '../types';

@Component({
  selector: 'app-my-blog-page',
  templateUrl: './my-blog-page.component.html',
  styleUrls: ['./my-blog-page.component.css']
})
export class MyBlogPageComponent implements OnInit {
  blogs: Blog[] = [];

  constructor() { }

  ngOnInit(): void {
    this.blogs = fakeBlogs;
  }

  onDeleteClocked(blogId: string): void {
    alert(`Deleting your blog with id ${blogId}`);
  }

}
