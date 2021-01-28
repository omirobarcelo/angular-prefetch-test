import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseRESTService {
  private apiURL: string;

  private cache: { [args: string]: unknown } = {};

  constructor(private http: HttpClient) {
    this.apiURL = environment.baseURL;
  }

  getAll<T>(
    path: string,
    { page, limit }: { page: number; limit: number } = { page: 0, limit: 10 }
  ): Observable<T[]> {
    const cacheKey = `${path}-${page}-${limit}`;
    const cachedResult = this.cache[cacheKey];
    return cachedResult !== undefined
      ? (of(cachedResult) as Observable<T[]>)
      : this.http.get<T[]>(`${this.apiURL}/${path}`).pipe(
          map((list) => list.slice(page * limit, page * limit + limit)),
          tap((res) => (this.cache[cacheKey] = res)),
          delay(800)
        );
  }
}
