import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      charactersFilteredWithID: [],

      optionSelected: '',
      arrayFilteredS: [],
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(event) {
    const selected = event.target.value

    this.setState({
      optionSelected: selected
    })

    const arrayCopy = [...this.state.hpCharsWithID]
    let arrayFiltered = []
    if (selected === 'Estudiante') {
      arrayFiltered = arrayCopy.filter((char) => {
        if (char.hogwartsStudent) {
          return true;
        } else {
          return false;
        }
      })
    } else if (selected === 'Staff') {
      arrayFiltered = arrayCopy.filter((char) => {
        if (char.hogwartsStaff) {
          return true;
        } else {
          return false;
        }
      })
    } else {
      arrayFiltered = arrayCopy
    }

    this.setState({
      arrayFilteredS: arrayFiltered
    }, () => console.log(this.state.arrayFilteredS))
  }

  handleInput(event) {
    const inputSearch = event.target.value

    this.setState({
      inputValue: inputSearch
    })
    // ejecuto el filtro
    const copyArray = [...this.state.hpCharsWithID]
    const arrayFilter = copyArray.filter(
      char => char.name.toLowerCase().includes(inputSearch.toLowerCase())
    )
    this.setState({
      charactersFiltered: arrayFilter,
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

  handleButton(event) {
    event.preventDefault();
    this.setState({ inputValue: '' })
  }



  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          hpCharacters: json
        }, this.putID);
      });
  }

  render() {
    const {
      hpCharsWithID,
      charactersFiltered,
      inputValue,
      arrayFilteredS,
    } = this.state

    return (
      <Switch>
        <Route
          exact path='/'
          render={(props) => <Home
            hpCharsWithID={hpCharsWithID}
            charactersFiltered={charactersFiltered}
            inputValue={inputValue}
            onChangeHandler={this.handleInput}
            selectHandler={this.handleSelect}
            arrayFilteredS={arrayFilteredS}
          />}
        />
        <Route
          path="/character/:id"
          render={(props) => <CharacterDetail
            match={props.match}
            hpCharsWithID={hpCharsWithID}
            onClickHandler={this.handleButton}
          />}
        />
      </Switch>
    );
  }
}

export default App;
