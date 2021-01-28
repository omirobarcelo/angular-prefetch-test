import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../data/user.interface';
import { UsersRESTService } from '../services/users-rest.service';
import { UsersComponent } from './users.component';

@Injectable()
export class UsersResolver implements Resolve<Observable<User[]>> {
  constructor(private usersRESTService: UsersRESTService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    // Add some SEO
    return this.usersRESTService.getAllUsers();
  }
}

const routes: Routes = [
  { path: '', component: UsersComponent, resolve: { users: UsersResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersResolver]
})
export class UsersRoutingModule {}
