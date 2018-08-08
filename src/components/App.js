import React, { Component } from 'react';
import '../stylesheets/App.css';
import CharacterList from './CharacterList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpCharacters: []
    }
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
        <CharacterList
          hpCharacters={hpCharacters}
        />
      </div>
    );
  }
}

export default App;
