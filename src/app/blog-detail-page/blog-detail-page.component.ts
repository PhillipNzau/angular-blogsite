import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { fakeBlogs} from '../fake-data';
import { Blog} from '../types';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent implements OnInit {
  blog: Blog;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blog = fakeBlogs.find(blog => blog.id === id);
  }

}
