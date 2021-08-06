import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-project';

}
