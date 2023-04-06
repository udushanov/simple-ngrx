import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Todo> {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
