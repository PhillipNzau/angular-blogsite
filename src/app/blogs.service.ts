import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(
    private http: HttpClient,
  ) { }

  // getBlogs(): Observable<Blog[]> {
  //   return this.http.get<Blog[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs');
  // }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs');
  }

  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs/${id}`);
  }

  // addViewToBlog(id: string): Observable<Blog> {
  //   return this.http.post<Blog>(
  //     `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs/${id}`,
  //     {},
  //     httpOptions,
  //   );
  // }

  getBlogForUser(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/users');
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(`https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs/${id}`);
  }

  createBlog(blogimg: string, headline: string, content: string, footnote: string): Observable<Blog> {
    // blogimg = 'a random image';
    return this.http.post<Blog>(
      'https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs',
      { blogimg, headline, content, footnote },
      httpOptions,
    );
  }

  editBlog(id: string, blogimg: string, headline: string, content: string, footnote: string): Observable<Blog>{
    return this.http.put<Blog>(
      `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs/${id}`,
      { blogimg, headline, content, footnote },
      httpOptions,
    );
  }

}
