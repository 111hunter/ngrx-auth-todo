import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const login = createAction(
  '[Auth Page] User Login',
  props<{ user: Partial<User> }>()
);

export const loginSuccess = createAction(
  '[Auth Page] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Page] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth Page] User Logut');