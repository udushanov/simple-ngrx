import { createAction, props } from '@ngrx/store';

export const increment = createAction('[ONE_COMPONENT] INCREMENT');
export const decrement = createAction('[ONE_COMPONENT] DECREMENT');
export const reset = createAction('[ONE_COMPONENT] RESET');
export const send = createAction(
  '[ONE_COMPONENT] SEND',
  props<{ message: string }>()
);
