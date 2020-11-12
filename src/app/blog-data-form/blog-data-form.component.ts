import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { Blog} from '../types';


@Component({
  selector: 'app-blog-data-form',
  templateUrl: './blog-data-form.component.html',
  styleUrls: ['./blog-data-form.component.css']
})
export class BlogDataFormComponent implements OnInit {
  @Input() buttonText = '';
  @Input() currentBlogimg = '';
  @Input() currentHeadline = '';
  @Input() currentContent = '';
  @Input() currentFootnote = '';

  blogimg: string;
  headline: string;
  content: string;
  footnote: string;
  views: 0;

  @Output() onSubmit = new EventEmitter<Blog>();
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.blogimg = this.currentBlogimg;
    this.headline = this.currentHeadline;
    this.content = this.currentContent;
    this.footnote = this.currentFootnote;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      blogimg: this.blogimg,
      headline: this.headline,
      content: this.content,
      footnote: this.footnote,
      // views: null,
    });
    // this.router.navigateByUrl('/my-blog');
  }

}
