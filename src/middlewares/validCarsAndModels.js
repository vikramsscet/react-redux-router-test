
const cars = ['maruti','rolls','hundai'];
const models = ['baleno','i20','phantom'];

export default function({getState, dispatch}){
    return function(next){
        return function(action){
            
            if(action.type === 'LOAD'){
                return fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(json => {
                        //return { type: "DATA_LOADED", payload: json };
                        return next(Object.assign({}, action, {payload : json}));
                    });
                //console.log('in load middleware');
            }
            
        }
    }
}
