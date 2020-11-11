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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogDetailPageComponent,
    EditBlogPageComponent,
    MyBlogPageComponent,
    NewBlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
