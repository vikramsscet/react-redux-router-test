export function LoadData(data){
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                //return { type: "DATA_LOADED", payload: json };
                //return next(Object.assign({}, action, { payload: json }));
                dispatch(LoadFinally(json))
            });
    }
    
}
function LoadFinally(data){
    return {
        type : "LOAD",
        payload : data
    }    
}
export function AddData(data){
    return {
        type : "ADD",
        payload : data
    }
}
export function RemoveData(data){
    return {
        type : "REMOVE",
        payload : data
    }
}