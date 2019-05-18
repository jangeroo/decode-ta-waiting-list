import React, { Component } from 'react';

export default class IssueForm extends Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className='section'>
        <form className='issue-form' onSubmit={this.handleSubmit}>
          <textarea
            className='issue-input'
            name='issue'
            placeholder='Enter a brief description of your issue...'
          />
          <div>
            <input
              type='submit'
              className='btn lower-10'
              value='Submit Issue'
            />
          </div>
        </form>
      </div>
    );
  }
}
