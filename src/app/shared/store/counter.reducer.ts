import { createReducer, on } from "@ngrx/store"
import { decrement, increment } from "./counter.action"

const _counterReducer = createReducer(initialState,
    on(increment,(state: any)=>{
    return{
        ...state,
        counter:state.counter + 1
    };
}),
    on(decrement,(state: any)=>{
    return{
        ...state,
        counter:state.counter - 1
    };
}),

)


export function counterReducer(state:any, action:any) {
    return _counterReducer(state,action)
}