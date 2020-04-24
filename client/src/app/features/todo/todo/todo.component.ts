import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as TodoActions from 'src/app/store/states/actions/todo.action';
import * as TodoSelectors from 'src/app/store/states/selectors/todo.selector';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  vm$ = combineLatest([
    this.store.pipe(select(TodoSelectors.getLoading)),
    this.store.pipe(select(TodoSelectors.getTodos)),
  ]).pipe(map(([loading, todos]) => ({ loading, todos })));

  /**
   * Constructor
   */
  constructor(private store: Store) { }

  /**
   * Initialize
   */
  ngOnInit() {
    this.store.dispatch(TodoActions.loadAll({ offset: 0, limit: 100 }));
  }

  /**
   * Show create dialog
   */
  showCreateDialog() {
    this.store.dispatch(TodoActions.showCreateDialog());
  }

  /**
   * Show edit dialog
   */
  showEditDialog(todo: Todo) {
    this.store.dispatch(TodoActions.showEditDialog({ todo }));
  }

  /**
   * Show remove dialog
   */
  showRemoveDialog(id: string) {
    this.store.dispatch(TodoActions.showRemoveDialog({ id }));
  }
}
