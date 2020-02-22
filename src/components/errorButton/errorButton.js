import React, { Component } from 'react';

class ErrorButton extends Component {
  state = {
    rendreError: false
  };
  render() {
    console.log('render');
    if (this.state.rendreError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className='error-button btn btn-danger btn-lg mb-2'
        onClick={() => this.setState({ rendreError: true })}
      >
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
