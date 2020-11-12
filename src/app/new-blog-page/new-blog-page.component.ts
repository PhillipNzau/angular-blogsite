import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {BlogsService} from '../blogs.service';


@Component({
  selector: 'app-new-blog-page',
  templateUrl: './new-blog-page.component.html',
  styleUrls: ['./new-blog-page.component.css']
})
export class NewBlogPageComponent implements OnInit {
  constructor(
    private router: Router,
    private blogsService: BlogsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit({ blogimg, headline, content, footnote }): void {
    const data = {
      img: blogimg,
      header: headline,
      cont: content,
      notre: footnote
    };
    console.log('Form data', data);
    this.blogsService.createBlog(blogimg, headline, content, footnote)
      .subscribe(() => {
        this.router.navigateByUrl('/my-blog');
      });
    alert('Create a new blog...');
  }

  // tslint:disable-next-line:typedef
  showData($event: any) {
    console.log('random');
    console.log($event);
  }
}
