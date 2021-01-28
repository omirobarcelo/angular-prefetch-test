import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../data/user.interface';
import { BaseRESTService } from './base-rest.service';

const RESOURCE_PATH = 'users';

@Injectable({
  providedIn: 'root',
})
export class UsersRESTService {
  constructor(private data: BaseRESTService) {}

  public getAllUsers(
    { page, limit } = { page: 0, limit: 10 }
  ): Observable<User[]> {
    return this.data.getAll(`${RESOURCE_PATH}`, { page, limit });
  }
}
