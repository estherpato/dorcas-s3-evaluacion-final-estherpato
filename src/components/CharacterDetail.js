import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends Component {
    render() {
        const cachedChars = JSON.parse(localStorage.getItem('characters'));
        console.log(cachedChars)
        const { hpCharsWithID, match } = this.props
        let detailToPaint

        if (cachedChars) {
            detailToPaint = cachedChars[match.params.id]
        } else {
            detailToPaint = hpCharsWithID[match.params.id]
        }

        let houseMembership
        if (detailToPaint.house === "") {
            houseMembership = 'Sin casa'
        } else {
            houseMembership = detailToPaint.house
        }

        let status
        if (detailToPaint.status === true) {
            status = 'Alive'
        } else {
            status = 'Dead'
        }

        return (
            <div>
                <Link to='/'>Home</Link>

                <img src={detailToPaint.image} alt={detailToPaint.name} />
                <h2>{detailToPaint.name}</h2>
                <ul>
                    <li>Casa: {houseMembership}</li>
                    <li>Nacimiento: {detailToPaint.yearOfBirth}</li>
                    <li>Patronus: {detailToPaint.patronus}</li>
                    <li>Estado: {status}</li>
                </ul>

            </div>
        );
    }
}

export default CharacterDetail;