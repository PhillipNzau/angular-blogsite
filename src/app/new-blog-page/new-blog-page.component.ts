import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-new-blog-page',
  templateUrl: './new-blog-page.component.html',
  styleUrls: ['./new-blog-page.component.css']
})
export class NewBlogPageComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Create a new blog...');
    this.router.navigateByUrl('/my-blog');
  }
}
