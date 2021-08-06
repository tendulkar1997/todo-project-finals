import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
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
    this.todoService.getTodoById(this.id).subscribe(data =>{
      this.todo=data;
    });

  }

  onSearch(id:any) {
    console.log(id);
    // @ts-ignore
    this.todo=new Todo();
    this.todoService.getTodoById(id).subscribe(data =>
    {
      console.log(data);
      this.todo=data;
      console.log(this.todo);
    } , error => console.log(error));
  }

}
