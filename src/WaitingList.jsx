import React, { Component } from 'react';

const Issue = ({ student }) => {
  return <li>{student.name}</li>;
};
export default class WaitingList extends Component {
  constructor() {
    super();
    this.state = { students: [] };
  }

  componentDidMount() {
    fetch('/waiting-list')
      .then(res => res.json())
      .then(students => {
        console.log('WAITING:', students);
        this.setState({ students });
      });
  }

  render() {
    return (
      <div className='section'>
        <div className='box'>
          <h2 className='box box-title'>WaitingList</h2>
          <ul className='table'>
            {this.state.students.map(student => (
              <Issue student={student} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
