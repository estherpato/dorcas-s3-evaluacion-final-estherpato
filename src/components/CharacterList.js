import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

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
                    {drawMeLikeOneOfYourFrechGirls.map((char, i) =>
                        <li
                            key={i}
                        >
                            <CharacterCard
                                photo={char.image}
                                name={char.name}
                                house={char.house}
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}



export default CharacterList;