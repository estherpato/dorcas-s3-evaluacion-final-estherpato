import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class CharacterDetail extends Component {
    render() {
        console.log('lelele')
        return (
            <div>
                <Link to='/'>Home</Link>
                holo
                {/* <img src="" alt="" />
                <h2></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                
            </div>
        );
    }
}

export default CharacterDetail;