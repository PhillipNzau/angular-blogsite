import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogDetailPageComponent} from './blog-detail-page/blog-detail-page.component';
import {EditBlogPageComponent} from './edit-blog-page/edit-blog-page.component';
import {MyBlogPageComponent} from './my-blog-page/my-blog-page.component';
import {NewBlogPageComponent} from './new-blog-page/new-blog-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full'},
  { path: 'blogs', component: HomeComponent, pathMatch: 'full' },
  { path: 'blogs/:id', component: BlogDetailPageComponent },
  { path: 'edit-blog/:id', component: EditBlogPageComponent },
  { path: 'my-blog', component: MyBlogPageComponent },
  { path: 'new-blog', component: NewBlogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
