import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedIssueForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    if (!this.inputName.value) {
      alert("Don't forget your name!");
      return;
    }
    if (this.inputIssue.value.split(' ').length < 3) {
      alert('Please describe your issue more precisely.');
      return;
    }
    let data = new FormData();
    data.append('name', this.inputName.value);
    data.append('issue', this.inputIssue.value);

    fetch('http://localhost:4001/issue', { method: 'POST', body: data })
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        if (res.success)
          this.props.dispatch({
            type: 'add-student',
            student: { name: res.name, issue: res.issue },
          });
      });

    event.target.reset();
  };

  render() {
    return (
      <div className='section'>
        <form className='issue-form' onSubmit={this.handleSubmit}>
          <input
            ref={ref => (this.inputName = ref)}
            type='text'
            className='issue-input'
            placeholder='Enter your name'
          />
          <textarea
            ref={ref => (this.inputIssue = ref)}
            className='issue-input lower-10'
            name='issue'
            placeholder='Enter a brief description of your issue...'
          />
          <input type='submit' className='btn ' value='Submit Issue' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const IssueForm = connect(mapStateToProps)(UnconnectedIssueForm);
export default IssueForm;
