import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent {
  count$: Observable<number>;
  message$: Observable<string>;
  data$: Todo = {};

  constructor(
    private store: Store<{ count: number; message: string; todos: Todo }>
  ) {
    this.count$ = this.store.select('count');
    this.message$ = this.store.select('message');
    this.store.select('todos').subscribe((data) => (this.data$ = data));
  }
}
