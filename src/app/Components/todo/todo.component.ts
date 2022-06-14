import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem: string
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todos')
    if (this.localItem == null)
      this.todos = []
    else
      this.todos = JSON.parse(this.localItem);

  }

  deleteTodo(todo: Todo) {

    console.log(todo)
    const index = this.todos.indexOf(todo)
    console.log(index)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo) {

    console.log(todo)
  
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggleTodo(todo: Todo) {

    console.log(todo)
    
    const index = this.todos.indexOf(todo)
    this.todos[index].status= !this.todos[index].status;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


  ngOnInit(): void {
  }

}
