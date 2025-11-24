import FilterAndSort from '../common/FilterAndSort';

export default function InProgress() {
  return (
    <>
      <div class="flex-1 flex flex-col min-w-0 w-full">
        <div class="flex items-center gap-3 mb-6">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-gray-900">In Progress</h2>
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
            data-card="graphic-design"
            data-column="in-progress"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="graphic-design-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="graphic-design-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
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
              <h3 class="font-semibold text-gray-900 text-sm">
                Graphic Design
              </h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Graphic Design Edits and refinements
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">
                Creative
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

          {/* <!-- Card 2 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="presentation"
            data-column="in-progress"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="presentation-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="presentation-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
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
              <h3 class="font-semibold text-gray-900 text-sm">Presentation</h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">Presentation Slide Design</p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">
                Development
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
              Aug 30
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="api-integration"
            data-column="in-progress"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="api-integration-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="api-integration-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
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
              <h3 class="font-semibold text-gray-900 text-sm">
                API Integration
              </h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Integrate payment gateway APIs
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded">
                Backend
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
              Aug 29
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
