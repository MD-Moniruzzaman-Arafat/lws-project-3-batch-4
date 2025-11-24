import FilterAndSort from '../common/FilterAndSort';

export default function ToDo() {
  return (
    <>
      <div class="flex-1 flex flex-col min-w-0 w-full">
        <div class="flex items-center gap-3 mb-6">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-gray-900">To-do</h2>
            <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              3
            </span>
          </div>

          <FilterAndSort />
        </div>

        <div class="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="wireframes"
            data-column="todo"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="wireframes-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="wireframes-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Done
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">Wireframes</h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Set up high-fidelity prototypes with conditional logic
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                Design
              </span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-500">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Aug 26
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="data-entry"
            data-column="todo"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="data-entry-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="data-entry-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Done
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">Data Entry</h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Data Entry Cleanup and validation
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded">
                Operations
              </span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-500">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Aug 27
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="social-media"
            data-column="todo"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="social-media-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="social-media-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Done
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">Social Media</h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Social Media Scheduling and posting
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                Marketing
              </span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-500">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Aug 28
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
