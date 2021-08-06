import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  // @ts-ignore
  id: number
  // @ts-ignore
  todo: Todo=new Todo();
  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  onSubmit() {
    this.todoService.updateTodo(this.id, this.todo).subscribe( data =>{
        this.goToTodoList();
      }
      , error => console.log(error));
  }

  private goToTodoList() {
    this.router.navigate(['/todos']);
  }
}
