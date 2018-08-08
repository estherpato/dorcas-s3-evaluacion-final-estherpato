import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends Component {
    render() {
        const { hpCharsWithID, charactersFiltered, inputValue, onChangeHandler } = this.props
        return (
            <div className="App">
                <header>
                    <h1>Personajillos de Harry Potter</h1>
                </header>
                <main>
                    <Filters
                        inputValue={inputValue}
                        onChangeHandler={onChangeHandler}
                    />
                    <CharacterList
                        hpCharacters={hpCharsWithID}
                        charactersFiltered={charactersFiltered}
                        inputValue={inputValue}
                    />
                </main>
                <footer>
                    <p>Adalab</p>
                    <p>Evaluación Sprint 3</p>
                    <p>Esther Pato Gonzalez</p>
                </footer>
            </div>
        );
    }
}

export default App;