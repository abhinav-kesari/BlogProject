import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.scss']
})
export class PostBlogComponent implements OnInit {
   

  constructor( private http : BlogService,private router:Router) { }

  postBlog = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    active: new FormControl(''),
    image_url: new FormControl('')
  });

  ngOnInit( ): void {
  }
  
  postform(data:any){
    this.http.postBlogList(data.value).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigateByUrl('/')
  }

}
