import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {AddData, RemoveData} from '../actions'
function mapStateToProps(state){
    return {
        cars : state.cars
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({AddData, RemoveData}, dispatch);
}

function addCar(cars, addCallBack){
    let carName = document.getElementById('car').value;
    cars.push({name:carName, models:[]})
    addCallBack(cars);
}
function addModel(cars, addCallBack){
    var c = document.getElementById('cars')
    let carName = c.selectedOptions[0].value
    let modelName = document.getElementById('model').value;
    console.log(carName, modelName);
    let newCars = cars.map((car)=>{
        if(car.name === carName){
            car.models.push(modelName);
            return car;
        }
        return car;
    })
    addCallBack(newCars);
}

function ReduxCars(props){
    
    return(
        <div>
            <p>Your Cars and Models</p>
            <hr />
            <div>
                <input type='text' id='car' placeholder='Add New Car' />
                <button id='addcar' onClick={()=>addCar(props.cars, props.AddData)}> Add Car</button>
            </div>
            <hr></hr>
            <div>
                {carsDropDown(props.cars)}
                <input type='text' id='model' placeholder='Add New Model' />
                <button id='addmodel' onClick={()=>addModel(props.cars, props.AddData)} > Add Model</button>
            </div>
            
            <hr></hr>
            <ul>
            {
                props.cars.map((car, index) => {
                    return  <li key={index}>
                                {car.name}
                                {ReduxModel(car)}
                            </li>
                })
            }
            </ul>  
        </div>
        
    )
}

function carsDropDown(cars){
    return (
        <select id='cars'>
            {
                cars.map((car, index) => {
                    return  <option key={index} value={car.name}>
                                {car.name}
                            </option>
                })
            }        
        </select>
    )
}

function ReduxModel(car){
    return(
        <ul>
            {
                car.models.map((model, index) => {
                    return <li key={index}> {model} <a href='#'>X</a></li>
                })
            }
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCars);