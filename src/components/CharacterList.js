import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    render() {
        const { hpCharacters } = this.props
        return (
            <div>
                <ul>
                    {hpCharacters.map((char, i) =>
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