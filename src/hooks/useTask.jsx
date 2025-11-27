import { useContext } from 'react';
import { TaskContext } from '../context';

export default function useTask() {
  const { state, dispatch } = useContext(TaskContext);
  return { state, dispatch };
}
