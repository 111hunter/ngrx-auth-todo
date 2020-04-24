import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import * as TodoActions from 'src/app/store/states/actions/todo.action';
import * as TodoSelectors from 'src/app/store/states/selectors/todo.selector';
import { Todo } from 'src/app/models/todo.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditDialogComponent implements OnInit {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todo: Todo;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: { todo: Todo }
  ) {
    this.todo = this.data.todo;
  }

  ngOnInit() {
    this.form.setValue({
      text: this.todo.text,
    });
  }

  save() {
    const text = this.form.get('text')?.value as string;
    const todo = {
      ...this.todo,
      text,
    };
    this.store.dispatch(TodoActions.update({ todo }));
  }
}
