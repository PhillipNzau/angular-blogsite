import { Injectable } from '@angular/core';
import { Blog } from './types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/blogs');
  }
}
