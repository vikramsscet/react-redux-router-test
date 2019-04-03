import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Contact} from './components/Contact'
import {About} from './components/About'
import {notfound} from './components/notfound'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const router = (
        <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/about'>About Us</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/about' component={About}></Route> 
                <Route component={notfound}></Route>
            </Switch>
            
        </BrowserRouter>
    )


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
