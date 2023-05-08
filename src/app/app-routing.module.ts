import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path : '' , component: BlogListComponent
  },
  {
    path: 'postBlog' , component: PostBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
