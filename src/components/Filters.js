import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Filters.css';

class Filters extends Component {
    render() {
        const {
            inputValue,
            onChangeHandler,
            selectHandler
        } = this.props

        return (
            <div>
            <div className="Filters__container">
                <input
                    className="Filters__input"
                    type="text"
                    placeholder="Busca tu personaje"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <select name="" id="" onChange={selectHandler}>
                <option value="Estudiante">Estudiante</option>
                <option value="Staff">Staff</option>
                <option value="Todos">Todos</option>
                </select>
            </div>
            </div>
        );
    }
}

Filters.propTypes = {
    inputValue: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
};

export default Filters;