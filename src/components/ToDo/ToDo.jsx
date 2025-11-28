import { useState } from 'react';
import Card from '../common/Card';
import FilterAndSort from '../common/FilterAndSort';

export default function ToDo({ tasks }) {
  const [filter, setFilter] = useState([]);
  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">To-do</h2>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>

          <FilterAndSort tag={tasks} setFilter={setFilter} />
        </div>

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* Card Start */}
          {filter.length > 0
            ? filter.map((task) => <Card key={task.id} task={task} />)
            : tasks.map((task) => <Card key={task.id} task={task} />)}
        </div>
      </div>
    </>
  );
}
