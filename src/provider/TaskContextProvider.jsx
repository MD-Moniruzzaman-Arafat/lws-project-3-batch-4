import { useReducer } from 'react';
import { TaskContext } from '../context';
import { initialState, taskReducer } from '../reducer/taskReducer';

export default function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
