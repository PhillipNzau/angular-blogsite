import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {BlogsService} from '../blogs.service';
import { Blog} from '../types';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  blog: Blog;
  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogsService.getBlogById(id)
      .subscribe(blog => {
        this.blog = blog;
        this.isLoading = false;
      });
    // this.blogsService.addViewToBlog(id)
    //   .subscribe(() => console.log('ViewsUpdated!'));
  }

}
