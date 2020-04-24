import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import * as TodoActions from 'src/app/store/states/actions/todo.action';
import * as TodoSelectors from 'src/app/store/states/selectors/todo.selector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todo-create-dialog',
  templateUrl: './todo-create-dialog.component.html',
  styleUrls: ['./todo-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreateDialogComponent {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));

  constructor(private fb: FormBuilder, private store: Store, public authService: AuthService) { }

  save() {
    const text: string = this.form.get('text')?.value;
    const todo: Partial<Todo> = {
      text,
    };
    this.store.dispatch(TodoActions.create({ todo }));
  }
}
