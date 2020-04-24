import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import * as TodoActions from 'src/app/store/states/actions/todo.action';
import * as TodoSelectors from 'src/app/store/states/selectors/todo.selector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDeleteDialogComponent {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  id: string;

  constructor(
    private store: Store,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: { id: string }
  ) {
    this.id = this.data.id;
  }

  remove() {
    this.store.dispatch(TodoActions.remove({ id: this.id }));
  }
}
