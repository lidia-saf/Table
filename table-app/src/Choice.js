import React from 'react';
import { Component } from 'react';
import './index.css'

class Choice extends Component {
    onClick(event) {
        if (event.target.value === "Маленький") {
            return true;
        } else {
            return false;
        }
    }
    render() {
        return(
            <div className="column">
            Выберите набор данных для загрузки: 
            <button type="button" onClick={event => this.onClick(event)}>Маленький</button>
            <button type="button" onClick={event => this.onClick(event)}>Большой</button>
            </div>
        )
    }
}

export default Choice;