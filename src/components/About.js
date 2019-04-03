import React from 'react'
import {Route, Link} from 'react-router-dom';

const ShowAbout = (props) => {
    return(
        <div>
            showing id {props.match.params.id}
        </div>
    )
}

export const About= (props) => {
    return(
        <div>
            <ul>
                <li><Link to='/about/1'>about1</Link></li>

                <li><Link to='/about/2'>about2</Link></li>

                <li><Link to='/about/3'>about3</Link></li>
            </ul>
            <div>
                <Route path='/about/:id' component={ShowAbout} />
            </div>
        </div>
    )
}