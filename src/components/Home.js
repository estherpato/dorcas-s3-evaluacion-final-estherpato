import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/Home.css'

class App extends Component {
    render() {
        const {
            hpCharsWithID,
            charactersFiltered,
            inputValue,
            onChangeHandler
        } = this.props
        return (
            <div className="Home__container">
                <header className="Home__header">
                    <h1>Personajes de Harry Potter</h1>
                </header>
                <main className="Home__main">
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
                <footer className="Home__footer">
                    <p>Adalab</p>
                    <p>Evaluación Sprint 3</p>
                    <p>Esther Pato Gonzalez</p>
                </footer>
            </div>
        );
    }
}

export default App;