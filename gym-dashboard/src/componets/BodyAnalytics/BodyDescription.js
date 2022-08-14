import React from "react";

const BodyDescription = () => {
  return (
    <div className="w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a
        href=""
        className="c-card block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl"
      >
        <div className="relative overflow-hidden pb-48">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="p-4">
          <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
            <p class="text-gray-600">Favorite Excersice:</p>
            <p>Push-ups</p>
          </div>
          <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
            <p class="text-gray-600">Size:</p>
            <p>32cm</p>
          </div>
          <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
            <p class="text-gray-600">Calories:</p>
            <p>2000cal</p>
          </div>
        </div>
        <div className="p-3">
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
             More chest excersices
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </a>
    </div>
  );
};

export default BodyDescription;
