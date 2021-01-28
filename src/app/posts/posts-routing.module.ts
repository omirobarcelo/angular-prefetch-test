import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../data/post.interface';
import { PostsRESTService } from '../services/posts-rest.service';
import { PostsComponent } from './posts.component';

@Injectable()
export class PostsResolver implements Resolve<Observable<Post[]>> {
  constructor(private postsRESTService: PostsRESTService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post[]> {
    // Add some SEO
    return this.postsRESTService.getAllPosts();
  }
}

const routes: Routes = [
  { path: '', component: PostsComponent, resolve: { posts: PostsResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PostsResolver],
})
export class PostsRoutingModule {}
