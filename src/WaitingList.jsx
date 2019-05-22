import React, { Component } from 'react';
import { connect } from 'react-redux';

const Issue = ({ student }) => {
  return (
    <li>
      {student.name}: {student.issue}
    </li>
  );
};

class UnconnectedWaitingList extends Component {
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

const mapStateToProps = state => {
  return {
    students: state.students,
  };
};

const WaitingList = connect(mapStateToProps)(UnconnectedWaitingList);
export default WaitingList;
