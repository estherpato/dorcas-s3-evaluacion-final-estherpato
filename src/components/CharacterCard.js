import React, { Component } from 'react';

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
            <div>
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