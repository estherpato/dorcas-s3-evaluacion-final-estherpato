import React, { Component } from 'react';
import '../stylesheets/App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpCharacters: [],
      inputValue: '',
      charactersFiltered: []
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    console.log(event.target.value)
    this.setState({
      inputValue: event.target.value
    })
    // ejecuto el filtro
    this.letsFilter()
  }

  letsFilter() {
    const copyArray = [...this.state.hpCharacters]
    const arrayFilter = copyArray.filter(char => char.name.includes(this.state.inputValue))
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
        });
      });
  }

  render() {
    console.log(this.state.charactersFiltered)
    const { hpCharacters, charactersFiltered, inputValue } = this.state
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
            hpCharacters={hpCharacters}
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
