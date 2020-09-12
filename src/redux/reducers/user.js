import { USER_SET, USER_UNSET } from "../actions/user"

const initialState={
}

const set=(state,action)=>{
    return {
        ...state,
        user:action.user
    }
}

const unset=(state,action)=>{
    return {
        ...state,
        user:undefined
    }
}

export default (state=initialState,action)=>{
    switch(action.type){
        case USER_SET:
            return set(state,action)
        case USER_UNSET:
            return unset(state,action)
        default:
            return state
    }
}