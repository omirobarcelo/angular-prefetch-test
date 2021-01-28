import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../data/post.interface';
import { PostsRESTService } from '../services/posts-rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  page = 0;

  constructor(
    private route: ActivatedRoute,
    private postsRESTService: PostsRESTService
  ) {
    this.posts = this.route.snapshot.data['posts'];
  }

  ngOnInit(): void {}

  prevPage(): void {
    this.postsRESTService
      .getAllPosts({ page: --this.page, limit: 10 })
      .subscribe((posts) => (this.posts = posts));
  }

  nextPage(): void {
    this.postsRESTService
      .getAllPosts({ page: ++this.page, limit: 10 })
      .subscribe((posts) => (this.posts = posts));
  }
}
