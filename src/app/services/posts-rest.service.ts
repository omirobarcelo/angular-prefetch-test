import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../data/post.interface';
import { BaseRESTService } from './base-rest.service';

const RESOURCE_PATH = 'posts';

@Injectable({
  providedIn: 'root',
})
export class PostsRESTService {
  constructor(private data: BaseRESTService) {}

  public getAllPosts(
    { page, limit } = { page: 0, limit: 10 }
  ): Observable<Post[]> {
    return this.data.getAll(`${RESOURCE_PATH}`, { page, limit });
  }
}
