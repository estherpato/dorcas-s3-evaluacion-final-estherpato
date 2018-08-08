import React, { Component } from 'react';

class Filters extends Component {
    render() {
       const { inputValue, onChangeHandler } = this.props
        return (
            <div>
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