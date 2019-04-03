import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './../../reducers';
import ReduxCars from '../ReduxCars';
//import middleware from '../../middlewares/validCarsAndModels'
import thunk from 'redux-thunk';
import { AllPosts } from '../ReduxPosts'
const store = createStore(RootReducer, applyMiddleware(thunk));

export default class ReduxComponent extends React.Component{
    render(){
        return(
            <Provider store={store}> 
                <div>
                    <ReduxCars /> 
                    <AllPosts />
                </div>
            </Provider>
        )
    }
}
