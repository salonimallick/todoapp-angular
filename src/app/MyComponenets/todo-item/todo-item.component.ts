import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

  @Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css'
  })
  export class TodoItemComponent {
    @Input() todo: Todo = new Todo;
    @Input()
    i!: number;
    @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
    @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  [x: string]: any;

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
  onCheckboxClick(todo: any){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
