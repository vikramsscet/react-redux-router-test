const initialState = {
    cars : [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ],
    posts : [{id:1,title:"dssdsd"}]
}

export function RootReducer(state = initialState, action){
    if(action.type === 'ADD'){
        let newstate = Object.assign({}, state, {cars : [...action.payload]})
        return newstate;
    }
    if(action.type === 'REMOVE'){
        return Object.assign({}, state, {cars : action.payload})
    }
    if(action.type === 'LOAD'){
        return Object.assign({}, state, {posts : [...action.payload]})
    }
    return state;
}