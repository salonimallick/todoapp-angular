import { Component } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  localItem: any;
  [x: string]: any;
  todo!: Todo[];
  todos: any;
  constructor() {
    this.localItem = localStorage.getItem("todo");
    if (this.localItem == null) {
      this.todo = [];
    }
    else {
      this.todo = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todo.indexOf(todo);
    this.todo.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(this.todo));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todo.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todo));
  }
  toggleTodo(todo: Todo) {
    const index = this.todo.indexOf(todo);
    this.todo[index].active = !this.todo[index].active;
    localStorage.setItem("todo", JSON.stringify(this.todo));

    console.log(todo)
}
}