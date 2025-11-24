import Done from '../Done/Done';
import InProgress from '../InProgress/InProgress';
import ToDo from '../ToDo/ToDo';

export default function KanbanBoard() {
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <ToDo />
          <InProgress />
          <Done />
        </div>
      </div>
    </>
  );
}
