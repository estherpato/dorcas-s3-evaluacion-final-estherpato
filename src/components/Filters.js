import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Filters.css';

class Filters extends Component {
    render() {
        const {
            inputValue,
            onChangeHandler
        } = this.props

        return (
            <div className="Filters__container">
                <input
                    className="Filters__input"
                    type="text"
                    placeholder="Busca tu personaje"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </div>
        );
    }
}

Filters.propTypes = {
    inputValue: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
};

export default Filters;