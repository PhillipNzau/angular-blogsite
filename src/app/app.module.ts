import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import { EditBlogPageComponent } from './edit-blog-page/edit-blog-page.component';
import { MyBlogPageComponent } from './my-blog-page/my-blog-page.component';
import { NewBlogPageComponent } from './new-blog-page/new-blog-page.component';
import { BlogDataFormComponent } from './blog-data-form/blog-data-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogDetailPageComponent,
    EditBlogPageComponent,
    MyBlogPageComponent,
    NewBlogPageComponent,
    BlogDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
