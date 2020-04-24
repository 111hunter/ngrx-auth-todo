import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Store, select } from '@ngrx/store';
import * as UserActions from 'src/app/store/states/actions/user.action';
import * as UserSelectors from 'src/app/store/states/selectors/user.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  error$ = this.store.pipe(select(UserSelectors.getError));
  authorized$ = this.store.pipe(select(UserSelectors.getLogin));

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
  }

  async ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        const username: string = this.form.get('username')?.value;
        const password: string = this.form.get('password')?.value;
        const user: Partial<User> = {
          username, password
        };
        this.store.dispatch(UserActions.login({ user }));
      } catch (err) {
        this.loginInvalid = true;
      }
    }
  }
}
