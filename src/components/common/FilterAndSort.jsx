import { useRef } from 'react';

export default function FilterAndSort({ tag }) {
  console.log('Tags in FilterAndSort:', tag);
  const filterBtn = useRef(null);
  const sortBtn = useRef(null);

  //   handle filter menu display
  const handleShowFilterMenu = () => {
    if (filterBtn.current.style.display === 'none') {
      filterBtn.current.style.display = 'block'; // show
      sortBtn.current.style.display = 'none'; // hide
    } else {
      filterBtn.current.style.display = 'none'; // hide
    }
    // console.log((filterBtn.current.style.display = 'block'));
  };
  //   handle sort menu display
  const handleShowSortMenu = () => {
    if (sortBtn.current.style.display === 'none') {
      sortBtn.current.style.display = 'block'; // show
      filterBtn.current.style.display = 'none'; // hide
    } else {
      sortBtn.current.style.display = 'none'; // hide
    }
    // console.log((sortBtn.current.style.display = 'block'));
  };
  return (
    <>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <button
            onClick={handleShowFilterMenu}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            data-menu-toggle="todo-filter-menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
            Filter
          </button>
          <div
            ref={filterBtn}
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
            id="todo-filter-menu"
            data-menu
          >
            <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Filter by tag
            </p>
            {tag?.length > 0 &&
              tag.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  {t.tag}
                </button>
              ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={handleShowSortMenu}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            data-menu-toggle="todo-sort-menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M8 12h12M12 18h8"
              ></path>
            </svg>
            Sort
          </button>
          <div
            ref={sortBtn}
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
            id="todo-sort-menu"
            data-menu
          >
            <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Sort by date
            </p>
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Newest first
            </button>
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Oldest first
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
