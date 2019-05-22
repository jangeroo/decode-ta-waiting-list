import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import IssueForm from './IssueForm.jsx';
import WaitingList from './WaitingList.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = { students: [] };
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    fetch('/waiting-list')
      .then(res => res.json())
      .then(students => {
        console.log('WAITING:', students);
        this.setState({ students });
      });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <IssueForm onSubmit={this.fetchStudents} />
        <WaitingList students={this.state.students} />
      </div>
    );
  }
}
