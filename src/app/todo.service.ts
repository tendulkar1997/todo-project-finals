import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseURL = "http://todoapp-env.eba-y5e43tpd.us-east-2.elasticbeanstalk.com/api/todos";
  constructor(private httpClient: HttpClient) { }
  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseURL}`);
  }
  createTodo(todo: Todo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, todo);
  }
  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseURL}/${id}`);
  }

  updateTodo(id: number, todo: Todo) {
    return this.httpClient.put(`${this.baseURL}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
