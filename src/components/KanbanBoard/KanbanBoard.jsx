import useTask from '../../hooks/useTask';
import Done from '../Done/Done';
import InProgress from '../InProgress/InProgress';
import ToDo from '../ToDo/ToDo';

export default function KanbanBoard() {
  const { state } = useTask();
  const todo = state.tasks.filter((task) => task.status === 'todo');
  const inProgress = state.tasks.filter(
    (task) => task.status === 'in-progress'
  );
  const done = state.tasks.filter((task) => task.status === 'done');
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <ToDo tasks={todo} />
          <InProgress tasks={inProgress} />
          <Done tasks={done} />
        </div>
      </div>
    </>
  );
}
