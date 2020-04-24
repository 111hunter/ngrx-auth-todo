import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoStoreModule } from './todo-store.module';
import { MaterialModule } from 'src/app/material.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListItemComponent, TodoCreateDialogComponent, TodoDeleteDialogComponent, TodoEditDialogComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TodoRoutingModule,
    TodoStoreModule,
  ],
  declarations: [
    TodoComponent,
    TodoListItemComponent,
    TodoCreateDialogComponent,
    TodoDeleteDialogComponent,
    TodoEditDialogComponent,
  ],
})
export class TodoModule { }
