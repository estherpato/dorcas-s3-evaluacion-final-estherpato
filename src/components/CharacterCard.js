import React, { Component } from 'react';
import '../stylesheets/CharacterCard.css'

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
                    src={photo}
                    alt={name}
                />
                <h3>{name}</h3>
                <p>{houseMembership}</p>
            </div>
        );
    }
}

CharacterCard.defaultProps = {
    house: 'Sin casa'
}

export default CharacterCard;