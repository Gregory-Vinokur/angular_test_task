import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthorizationComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuardService], },
  { path: 'posts/:id', component: PostDetailsComponent, canActivate: [AuthGuardService], },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
