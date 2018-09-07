import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Provider } from '@angular/core';

@Injectable()
export class UserResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of({
      name: 'test user'
    });
  }
}

export const UserResolverProvider: Provider = UserResolver;
