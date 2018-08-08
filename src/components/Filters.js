import React, { Component } from 'react';
import '../stylesheets/Filters.css';

class Filters extends Component {
    render() {
        const { inputValue, onChangeHandler } = this.props
        return (
            <div className="Filters__container">
                <input
                    type="text"
                    placeholder="Busca tu personaje"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </div>
        );
    }
}

export default Filters;