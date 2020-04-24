import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import * as UserActions from '../actions/user.action';
import { AuthService } from 'src/app/services/auth.service';


/**
 * User effects
 */
@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      concatMap(({ user }) =>
        this.authService.login(user).pipe(
          map((result) => UserActions.loginSuccess({ user: result })),
          catchError((error) => of(UserActions.loginFailure({ error })))
        )
      )
    ),
  );
}
