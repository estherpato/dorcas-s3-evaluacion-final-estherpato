import React, { Component } from 'react';
import '../stylesheets/CharacterCard.css';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { photo, name, house } = this.props
        let houseMembership

        if (house === "") {
            houseMembership = 'Sin casa'
        } else {
            houseMembership = house
        }

        return (
            <div className="CharacterCard__container">
                <img
                    className="CharacterCard-image"
                    src={photo}
                    alt={name}
                />
                <div className="CharacterCard-name"
                >
                    <h3>{name}</h3>
                </div>
                <div className="CharacterCard-house">
                    <p>{houseMembership}</p>
                </div>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string
};

export default CharacterCard;