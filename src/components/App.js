import React, { Component } from 'react';
import '../stylesheets/App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpCharacters: [],
      hpCharsWithID: [],

      inputValue: '',
      charactersFiltered: [],
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const inputSearch = event.target.value

    this.setState({
      inputValue: inputSearch
    })
    // ejecuto el filtro
    const copyArray = [...this.state.hpCharacters]
    const arrayFilter = copyArray.filter(
      char => char.name.includes(inputSearch)
    )
    this.setState({
      charactersFiltered: arrayFilter
    })
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          hpCharacters: json
        }, this.putID);
      });
  }

  putID() {
    const copyArray = [...this.state.hpCharacters]
    let hpCharactersID = []
    for (let i = 0; i < copyArray.length; i++) {
      hpCharactersID[i] = {
        ...copyArray[i],
        id: i
      }
    }

    this.setState({
      hpCharsWithID: hpCharactersID
    })
  }

  render() {
    const { hpCharsWithID, charactersFiltered, inputValue } = this.state
    console.log(this.state.hpCharsWithID)
    return (
      <div className="App">
        <header>
          <h1>Personajillos de Harry Potter</h1>
        </header>
        <main>
          <Filters
            inputValue={inputValue}
            onChangeHandler={this.handleInput}
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
