import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<string>();
}
