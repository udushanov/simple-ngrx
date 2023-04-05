import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, send } from 'src/app/store/actions';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  message: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

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
}
