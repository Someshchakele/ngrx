import { createReducer, on } from "@ngrx/store"
import { loadblog } from "./blog.action"
import { BlogState } from "./blog.state";

const _blogReducer = createReducer(BlogState,
    on(loadblog,(state: any)=>{
    return{
        ...state,
        
    };
}),


)


export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action)
}