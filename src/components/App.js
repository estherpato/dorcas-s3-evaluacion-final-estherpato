import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CharacterDetail from './CharacterDetail'

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
    }, this.setLocalStorage)
  }

  setLocalStorage() {
    const arrayCopy = [...this.state.hpCharsWithID]
    localStorage.setItem('characters', JSON.stringify(arrayCopy));
    this.setState({ hpCharsWithID: arrayCopy })
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      // .then(json => this.onSetResult(json))
      .then((json) => {
        this.setState({
          hpCharacters: json
        }, this.putID);
      });
}

  render() {
    const { hpCharsWithID, charactersFiltered, inputValue } = this.state
    return (
      <Switch>
        <Route
          exact path='/'
          render={(props) => <Home
            hpCharsWithID={hpCharsWithID}
            charactersFiltered={charactersFiltered}
            inputValue={inputValue}
            onChangeHandler={this.handleInput}
          />}
        />
        <Route
          path="/character/:id"
          render={(props) => <CharacterDetail
            match={props.match}
            hpCharsWithID={hpCharsWithID}
          />}
        />
      </Switch>
    );
  }
}

export default App;
