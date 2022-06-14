import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { title } from 'process';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }
 title: string
 description: string
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onAdd(){
    const todo ={
      sno:8,
      title: this.title,
      description: this.description,
      status: true

    }
    this.todoAdd.emit(todo);
  }
 

  ngOnInit(): void {
  }

}
