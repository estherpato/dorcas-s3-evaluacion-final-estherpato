import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends Component {
    render() {
        const {hpCharsWithID} = this.props
        let detailToPaint

        

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