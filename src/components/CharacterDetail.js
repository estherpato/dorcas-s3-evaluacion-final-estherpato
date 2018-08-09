import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends Component {
    render() {
        const { hpCharsWithID, match } = this.props
        let detailToPaint = hpCharsWithID[match.params.id]
        console.log(detailToPaint)

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