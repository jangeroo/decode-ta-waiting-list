import React, { Component } from 'react';

const Issue = ({ student }) => {
  return (
    <li>
      {student.name}: {student.issue}
    </li>
  );
};

export default class WaitingList extends Component {
  render() {
    return (
      <div className='section'>
        <div className='box'>
          <h2 className='box box-title'>WaitingList</h2>
          <ul className='table'>
            {this.props.students.map(student => (
              <Issue student={student} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
