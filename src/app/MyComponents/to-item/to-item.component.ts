
import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-to-item',
  templateUrl: './to-item.component.html',
  styleUrls: ['./to-item.component.css']
})
export class ToItemComponent implements OnInit {
@Input() todo: Todo;
@Input() i:number
@Output() todoDelete:EventEmitter<Todo> = new EventEmitter()
@Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
onClick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("onclick has triggered")
}
onCheckboxClick(todo:Todo){
this.todoCheckbox.emit(todo)
}
}
