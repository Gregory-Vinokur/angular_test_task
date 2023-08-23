import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTableModule,
    MatPaginatorModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [PostsComponent],
})
export class PostsModule { }