import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import {
  increment,
  decrement,
  reset,
  send,
  getData,
} from 'src/app/store/actions';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent {
  message: string = '';

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  send() {
    this.store.dispatch(send({ message: this.message }));
  }

  fetch() {
    this.store.dispatch(getData());
  }
}
