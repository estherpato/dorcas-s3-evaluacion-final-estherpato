import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
    render() {
        const { hpCharacters, charactersFiltered } = this.props
        let drawMeLikeOneOfYourFrechGirls

        if (charactersFiltered.length === 0) {
            drawMeLikeOneOfYourFrechGirls = hpCharacters
        } else {
            drawMeLikeOneOfYourFrechGirls = charactersFiltered
        }

        return (
            <div>
                <ul>
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



export default CharacterList;