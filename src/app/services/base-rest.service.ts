import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseRESTService {
  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.baseURL;
  }

  getAll<T>(
    path: string,
    { page, limit }: { page: number; limit: number } = { page: 0, limit: 10 }
  ): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.apiURL}/${path}`)
      .pipe(
        map((list) => list.slice(page * limit, page * limit + limit)),
        delay(800)
      );
  }
}
