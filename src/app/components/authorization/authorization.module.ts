import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AuthorizationComponent],
})
export class AuthorizationModule { }