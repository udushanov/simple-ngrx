import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, send } from './actions';

const initialCount = 0;

export const counterReducer = createReducer(
  initialCount,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

const initialMessage = '';
export const messageReducer = createReducer(
  initialMessage,
  on(send, (state, { message }) => message)
);
