import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs: any[] = [];
  currentPage: number = 1;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogList().subscribe((data) => {
      this.blogs = Object.values(data);
      console.log(this.blogs[0].length)
    });
    
  }

 
}
