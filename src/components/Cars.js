import React from 'react';

export const Cars = (props) => {
    return(
        <div>
        {
            props.cars.map((car, index) => {
                return  <div position={index} key={index}>
                            <p>{car.name}</p>
                            <ul>
                            {
                                car.models.map((model, index) => {
                                    return <li position={index} content={model} key={index}> {model} <a href='#' onClick={(e)=>{props.removeCar(e)}} > X </a></li>
                                })
                            }
                            </ul>
                        </div>
            })
        }
        </div>    
    )
}

function removeCar(){
    
}