import React, { Component } from 'react';
import '../stylesheets/App.css';
import CharacterList from './CharacterList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpCharacters: []
    }

    this.handleInputFilter = this.handleInputFilter.bind(this)
  }

  handleInputFilter(event) {
    console.log(event.target.value)
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
    const { hpCharacters } = this.state
    return (
      <div className="App">
        <header>
          <h1>Personajillos de Harry Potter</h1>
        </header>
        <main>
          <input
            type="text"
            placeholder="Busca tu personaje"
            
            onChange={this.handleInputFilter}
          />
          <CharacterList
            hpCharacters={hpCharacters}
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
