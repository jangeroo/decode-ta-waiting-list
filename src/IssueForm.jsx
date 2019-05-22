import React, { Component } from 'react';

export default class IssueForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      issue: '',
    };
  }

  handleNameChange = event => this.setState({ name: event.target.value });

  handleIssueChange = event => this.setState({ issue: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      alert("Don't forget your name!");
      return;
    }
    if (this.state.issue.split(' ').length < 3) {
      alert('Please describe your issue with at least three words');
      return;
    }
    let data = new FormData();
    data.append('name', this.state.name);
    data.append('issue', this.state.issue);

    fetch('/issue', { method: 'POST', body: data })
      .then(res => res.json())
      .then(res => console.log('res', res));

    this.setState({ name: '', issue: '' });
    this.props.onSubmit();
  };

  render() {
    return (
      <div className='section'>
        <form className='issue-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='issue-input'
            value={this.state.name}
            placeholder='Enter your name'
            onChange={this.handleNameChange}
          />
          <textarea
            className='issue-input lower-10'
            name='issue'
            value={this.state.issue}
            placeholder='Enter a brief description of your issue...'
            onChange={this.handleIssueChange}
          />
          <input type='submit' className='btn ' value='Submit Issue' />
        </form>
      </div>
    );
  }
}
