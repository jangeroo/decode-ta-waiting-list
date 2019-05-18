import React from 'react';
import './App.css';
import Header from './Header.jsx';
import IssueForm from './IssueForm.jsx';
import WaitingList from './WaitingList.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <IssueForm />
      <WaitingList />
    </div>
  );
}

export default App;
