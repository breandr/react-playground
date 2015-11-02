import React from 'react';
import './App.scss';

export default class App extends React.Component {
  render() {
    const style = {
      margin: 8,
      display: 'flex'
    };
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
