import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  count$: Observable<number>;
  message$: Observable<string>;

  constructor(private store: Store<{ count: number; message: string }>) {
    this.count$ = this.store.select('count');
    this.message$ = this.store.select('message');
  }

  ngOnInit(): void {}
}
