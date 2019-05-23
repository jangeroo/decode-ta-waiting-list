import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header.jsx';
import IssueForm from './IssueForm.jsx';
import WaitingList from './WaitingList.jsx';

class UnconnectedApp extends Component {
  componentDidMount() {
    this.fetchStudents();
    setInterval(this.fetchStudents, 1000);
  }

  fetchStudents = () => {
    fetch('http://localhost:4001/waiting-list')
      .then(res => res.json())
      .then(students => {
        console.log('WAITING:', students);
        this.setState({ students });
        this.props.dispatch({ type: 'update-students', students });
      });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <IssueForm />
        <WaitingList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
  };
};

const App = connect(mapStateToProps)(UnconnectedApp);
export default App;
