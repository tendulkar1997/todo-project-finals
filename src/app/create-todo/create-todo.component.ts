import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  // @ts-ignore
  todo: Todo=new Todo();

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.todo);
    this.saveTodo();
  }

  saveTodo() {
    this.todoService.createTodo(this.todo).subscribe( data =>{
        console.log(data);
        this.goToTodoList();
      },
      error => console.log(error));
  }

  goToTodoList(){
    this.router.navigate(['/todos']);
  }

}
