import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostDetailsComponent } from './post-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [PostDetailsComponent],
})
export class PostDetailsModule { }