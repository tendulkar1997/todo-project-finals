import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  // @ts-ignore
  id: number
  // @ts-ignore
  todo: Todo
  constructor(private route: ActivatedRoute, private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    // @ts-ignore
    this.todo=new Todo();
    this.todoService.getTodoById(this.id).subscribe(data =>
    {
      this.todo=data;
    });
  }

  todoList() {

    this.router.navigate(['/todos']);
  }
}
