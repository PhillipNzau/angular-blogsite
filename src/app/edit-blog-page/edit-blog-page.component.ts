import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Blog} from '../types';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-edit-blog-page',
  templateUrl: './edit-blog-page.component.html',
  styleUrls: ['./edit-blog-page.component.css']
})
export class EditBlogPageComponent implements OnInit {
  blog: Blog;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogsService: BlogsService,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.blog = fakeBlogs.find(blog => blog.id === id);
    this.blogsService.getBlogById(id)
      .subscribe(blog => this.blog = blog);

  }

  onSubmit({ blogimg, headline, content, footnote }): void {
    this.blogsService.editBlog(this.blog.id, blogimg, headline, content, footnote)
      .subscribe(() => {
        this.router.navigateByUrl('/my-blog');
      });
  }

}
