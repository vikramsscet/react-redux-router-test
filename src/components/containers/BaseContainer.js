import React, { Component } from 'react';
import { Cars } from './../Cars';
class BaseContainer extends Component{
    
    

    render(){
        const {children, cars, removeCar, textData, showText, clickevent} = this.props.allProps;
        return(
            <div>
                <p>{children} Base</p>
                
                <Cars removeCar={removeCar} cars={cars} />
            </div>
        )
    }
}

export default BaseContainer;