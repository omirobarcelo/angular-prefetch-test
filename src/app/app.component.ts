import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationError,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prefetch-test';
  loading$: Observable<boolean>;

  constructor(private router: Router) {
    this.loading$ = this.router.events.pipe(
      filter(
        (evt) =>
          evt instanceof ResolveStart ||
          evt instanceof ResolveEnd ||
          evt instanceof NavigationError ||
          evt instanceof NavigationCancel
      ),
      map((evt) => evt instanceof ResolveStart),
      startWith(false)
    );
  }
}
