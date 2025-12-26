import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../shared/store/Blog/blog.model';
import { Store } from '@ngrx/store';
import { getblog } from '../../shared/store/Blog/blog.selector';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [MatCardModule ,CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit{

  constructor(private store:Store<{blog:BlogModel[]}>){

  }

  blogList: any;

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item =>{
      this.blogList = item
      console.log("blog"+ this.blogList)
    })
  }
}
