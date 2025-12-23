import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const customerincrement = createAction('customerincrement',props<{value:number}>())

