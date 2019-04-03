import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import BaseContainer from './components/containers/BaseContainer'
import ReduxComponent from './components/containers/ReduxComponent'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      d1 : "dummy",
      count : 0,
      textData : '',
      cars : [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
      ]
    }
    this.action1 = this.action1.bind(this);
    this.showText =  this.showText.bind(this);
  }

  action1(){
    let count = this.state.count+1;
    this.setState(Object.assign({}, this.state, {count, d1:`ddddd`}) );
    console.log(this.state);
  }
  showText(){
    let textData = document.getElementById('textbox').value;
    this.setState(Object.assign({}, this.state, {textData}))
  }
  removeCar = (e)=>{
    let cars = this.state.cars;
    let vendorIndex = e.target.parentElement.parentElement.parentElement.getAttribute('position');
    let modelIndex = e.target.parentElement.getAttribute('position');
    delete cars[vendorIndex].models[modelIndex];
    this.setState(Object.assign({}, this.state, cars));
  }

  render() {
    let allProps = {
      removeCar : this.removeCar, 
      cars:this.state.cars,
      textData : this.state.textData,
      showText : this.showText,
      clickevent : this.action1,
    }
    return (
      <div className="App">
        
        <ReduxComponent />
        <hr />
        <BaseContainer allProps={allProps} />
      </div>
    );
  }
}

export default App;
