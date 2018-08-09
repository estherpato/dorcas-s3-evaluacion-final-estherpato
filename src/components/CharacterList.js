import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterList.css'

class CharacterList extends Component {
    render() {
        const {
            hpCharsWithID,
            charactersFiltered
        } = this.props

        let drawMeLikeOneOfYourFrechGirls

        if (charactersFiltered.length === 0) {
            drawMeLikeOneOfYourFrechGirls = hpCharsWithID
        } else {
            drawMeLikeOneOfYourFrechGirls = charactersFiltered
        }

        return (
            <div>
                <ul className="CharacterList__container">
                    {drawMeLikeOneOfYourFrechGirls.map((char) =>
                        <li
                            key={char.id}
                        >
                            <Link to={`/character/${char.id}`}>
                                <CharacterCard
                                    photo={char.image}
                                    name={char.name}
                                    house={char.house}
                                />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

CharacterList.propTypes = {
    hpCharsWithID: PropTypes.array,
    charactersFiltered: PropTypes.array,
};

export default CharacterList;