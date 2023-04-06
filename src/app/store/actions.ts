import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const increment = createAction('[ONE_COMPONENT] INCREMENT');

export const decrement = createAction('[ONE_COMPONENT] DECREMENT');

export const reset = createAction('[ONE_COMPONENT] RESET');

export const send = createAction(
  '[ONE_COMPONENT] SEND',
  props<{ message: string }>()
);

export const getData = createAction('[ONE COMPONENT] GET_DATA');

export const getDataSuccess = createAction(
  '[ONE COMPONENT] GET_DATA_SUCCESS',
  props<{ todos: Todo }>()
);

export const getDataFailure = createAction(
  '[ONE COMPONENT] GET_DATA_FAILURE',
  props<{ error: string }>
);
