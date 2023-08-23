import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post, PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Post>();
  pageSize = 10;
  postsToShow!: Post[];

  constructor(private postService: PostService, private paginatorIntl: MatPaginatorIntl) {

    this.paginatorIntl.nextPageLabel = 'Следующая страница';
    this.paginatorIntl.previousPageLabel = 'Предыдущая страница';
    this.paginatorIntl.firstPageLabel = 'Первая страница';
    this.paginatorIntl.lastPageLabel = 'Последняя страница';
    this.paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
  }

  ngOnInit(): void {
    this.loadPosts();
    this.dataSource.paginator = this.paginator;
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 из ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} из ${length}`;
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.dataSource.data = data;
      this.paginator.length = data.length;
      this.paginator.pageSize = this.pageSize;
      this.onPageChange({
        pageIndex: 0, pageSize: this.pageSize,
        length: data.length
      });
    });
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.postsToShow = this.dataSource.data?.slice(startIndex, endIndex);
  }
}
