import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import * as UserActions from 'src/app/store/states/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.apiUrl + '/auth';

  constructor(private http: HttpClient, private router: Router, private store: Store) { }

  login(user: Partial<User>) {
    return this.http.post<User>(`${this.api}/signIn`, user).pipe(
      mergeMap((user: User) => {
        this.token = user.access_token || '';
        this.router.navigate(['todos']);
        return of(user);
      })
    );
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  get token() {
    return localStorage.getItem('access_token') || '';
  }

  set token(val: string) {
    if (val.length > 0) {
      localStorage.setItem('access_token', val);
    }
  }

  logout() {
    this.store.dispatch(UserActions.logout());
    localStorage.clear();
  }
}
