import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo: Todo;
  @Input() i : number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log('boom')
  }

  toCut(todo:Todo){
    this.todoCheckBox.emit(todo)

  }

  ngOnInit(): void {
  }

}
