import { createReducer, on } from '@ngrx/store';
import { decrement, getDataSuccess, increment, reset, send } from './actions';
import { Todo } from '../models/todo';

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

const initialData: Todo = {};
export const dataReducer = createReducer(
  initialData,
  on(getDataSuccess, (state, { todos }) => todos)
);
