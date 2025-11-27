import { useState } from 'react';
import useTask from '../../hooks/useTask';

export default function AddTaskForm({ onClose }) {
  const { state, dispatch } = useTask();
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: '',
    description: '',
    tag: 'design',
    date: '',
    status: 'todo',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    dispatch({ type: 'ADD_TASK', payload: formData });
    // You can add form submission logic here
    onClose(); // Close the modal after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              for="title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>
            <input
              onChange={handleChange}
              value={formData.title}
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Wireframes"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              for="description"
              className="block text-sm font-medium text-gray-700"
            >
              Task Subtitle / Description
            </label>
            <input
              onChange={handleChange}
              value={formData.description}
              id="description"
              name="description"
              placeholder="Add context or acceptance criteria"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              for="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <select
              onChange={handleChange}
              value={formData.tag}
              id="tag"
              name="tag"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
            >
              <option value="design">Design</option>
              <option value="operations">Operations</option>
              <option value="marketing">Marketing</option>
              <option value="creative">Creative</option>
              <option value="development">Development</option>
              <option value="backend">Backend</option>
              <option value="setup">Setup</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="documentation">Documentation</option>
            </select>
          </div>

          <div>
            <label
              for="date"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.date}
              type="date"
              id="date"
              name="date"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
            />
          </div>

          <div>
            <label
              for="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              onChange={handleChange}
              value={formData.status}
              id="status"
              name="status"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
            >
              <option value="todo">To-do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </a>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}
