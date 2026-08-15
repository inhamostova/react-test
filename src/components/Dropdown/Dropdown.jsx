import React, { Component } from 'react';
import './Dropdown.css';

export class Dropdown extends Component {
  state = {
    isShown: false,
  };

  handleTogle = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    const { isShown } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.handleTogle}>
          {isShown ? 'Hide' : 'Show'}
        </button>
        {isShown && <div className="Dropdown__menu">Dropdown Menu</div>}
      </div>
    );
  }
}
