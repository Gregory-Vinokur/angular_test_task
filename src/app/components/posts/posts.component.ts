import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Post, PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  posts: Post[] | undefined;
  pageSize = 10;
  postsToShow: Post[] | undefined;

  constructor(private postService: PostService) {


  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.paginator.length = this.posts.length;
      this.paginator.pageSize = this.pageSize;
      this.onPageChange({
        pageIndex: 0, pageSize: this.pageSize,
        length: 100
      });
    });
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.postsToShow = this.posts?.slice(startIndex, endIndex);
  }
}
