import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.css';
import PropTypes from 'prop-types';
import Gryffindor from '../images/gryffindor.png'
import Slytherin from '../images/slytherin.png'
import Hufflepuff from '../images/hufflepuff.png'
import Ravenclaw from '../images/ravenclaw.png'

class CharacterDetail extends Component {
    render() {
        const cachedChars = JSON.parse(localStorage.getItem('characters'));

        const {
            hpCharsWithID,
            match,
            onClickHandler,
        } = this.props

        let detailToPaint

        if (cachedChars) {
            detailToPaint = cachedChars[match.params.id]
        } else {
            detailToPaint = hpCharsWithID[match.params.id]
        }

        let houseMembership

        if (detailToPaint.house === "") {
            houseMembership = 'Sin casa'
        } else if (detailToPaint.house === "Gryffindor") {
            houseMembership = Gryffindor
        } else if (detailToPaint.house === 'Slytherin') {
            houseMembership = Slytherin
        } else if (detailToPaint.house === 'Hufflepuff') {
            houseMembership = Hufflepuff
        } else if (detailToPaint.house === 'Ravenclaw') {
            houseMembership = Ravenclaw
        } else {
            houseMembership = detailToPaint.house
        }

        let status
        if (detailToPaint.status === true) {
            status = 'Vivo'
        } else {
            status = 'Muerto'
        }

        return (
            <div className="CardContainer__window">
                <div
                    className="CardContainer__return-button"
                    onClick={onClickHandler}
                >
                    <Link to='/'>Volver</Link>
                </div>
                <div className="CardDetail__container">
                    <img
                        className="CardDetail-image"
                        src={detailToPaint.image}
                        alt={detailToPaint.name} />
                    <div className="CardDetail-info">
                        <h2>{detailToPaint.name}</h2>
                        <img
                            className="CharacterDetail-house"
                            src={houseMembership}
                            alt={detailToPaint.house}
                        />
                        <ul>
                            <li>Nacimiento: {detailToPaint.yearOfBirth}</li>
                            <li>Patronus: {detailToPaint.patronus}</li>
                            <li>Estado: {status}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CharacterDetail.propTypes = {
    hpCharsWithID: PropTypes.array,
    match: PropTypes.object.isRequired,
    onClickHandler: PropTypes.func,
};

export default CharacterDetail;