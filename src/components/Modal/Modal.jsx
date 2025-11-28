import AddTaskForm from '../AddTaskForm/AddTaskForm';

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose} // outside click closes modal
      >
        <div
          className="animate-scaleIn"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
        >
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <AddTaskForm onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
