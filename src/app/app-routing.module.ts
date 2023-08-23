import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth', loadChildren: () =>
      import('./components/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      )
  },
  {
    path: 'posts', loadChildren: () =>
      import('./components/posts/posts.module').then(
        (m) => m.PostsModule
      ), canActivate: [AuthGuardService],
  },
  {
    path: 'posts/:id', loadChildren: () =>
      import('./components/post-details/post-details.module').then(
        (m) => m.PostDetailsModule
      ), canActivate: [AuthGuardService],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
