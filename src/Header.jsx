import React, { Component } from 'react';
import logo from './logo-small.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='Header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1> DecodeMTL TA Waiting List</h1>
        </header>
      </div>
    );
  }
}
