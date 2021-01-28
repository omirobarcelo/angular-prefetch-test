import { Directive, HostListener, Injector, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsRESTService } from '../services/posts-rest.service';
import { UsersRESTService } from '../services/users-rest.service';

@Directive({
  selector: '[appPrefetch]',
})
export class PrefetchDirective {
  services: { [resource: string]: any } = {
    users: UsersRESTService,
    posts: PostsRESTService,
  };

  @Input() resource: string | null = null;
  @Input() call: string | null = null;

  constructor(private injector: Injector) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.resource && this.call) {
      const service = this.injector.get<any>(this.services[this.resource]);
      (service[this.call]() as Observable<unknown>).subscribe();
    }
  }
}
