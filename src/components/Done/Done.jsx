import { useMemo } from 'react';
import useTask from '../../hooks/useTask';
import Card from '../common/Card';
import FilterAndSort from '../common/FilterAndSort';

export default function Done() {
  const { state } = useTask();

  const done = useMemo(() => {
    return state.tasks.filter((task) => task.status === 'done');
  }, [state.tasks]);
  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">Done</h2>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {done.length}
            </span>
          </div>
          <FilterAndSort />
        </div>
        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {done.map((task) => (
            <Card key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
