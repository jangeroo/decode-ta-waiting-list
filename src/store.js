import { createStore } from 'redux';

const defaultState = { students: [] };

const reducer = (state = defaultState, action) => {
  if (action.type === 'update-students') {
    return { ...state, students: action.students };
  }
  // 'add-student' action for immediate feedback for user who just added issue,
  // even though the waitinglist gets updated on an interval in App
  if (action.type === 'add-student') {
    return { ...state, students: state.students.concat([action.student]) };
  }
  return state;
};

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
