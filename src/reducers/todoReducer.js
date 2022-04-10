const initialState={
    name:'rashi'
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':{
            debugger
            
            return {...state,name:action.payload.name}
        }

        default :
            return state
    }
}