import React from 'react';

class MyInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  handleChange({ target }) {
    this.setState({ value: target.value });
  }

  handleClearInput() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="my-input">
        <fieldset>
          <legend>{this.props.label}</legend>
          <span style={{ display: 'block' }}>{this.state.value === '' ? 'Input is empty' : 'Input has value'}</span>
          <input
            className={this.state.value === '' ? 'empty' : ''}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClearInput}>
            Clear
          </button>
        </fieldset>
      </div>
    );
  }
}

export default MyInput;
