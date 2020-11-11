import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Blog} from '../types';
import { fakeBlogs} from '../fake-data';

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

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blog = fakeBlogs.find(blog => blog.id === id);

  }

  onSubmit(): void {
    alert('Saving changes to the blog....');
    this.router.navigateByUrl('/my-blog');

  }

}
