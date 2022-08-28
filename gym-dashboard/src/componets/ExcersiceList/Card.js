import React from "react";

const Card = ({ imageSrc, imageAlt,name,muscle}) => {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <a
        href=""
        className="c-card block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl"
      >
        <div className="relative overflow-hidden pb-3">
          <img
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            src={imageSrc}
            loading="lazy"
            alt={imageAlt}
          />
        </div>
        <div className="p-4">
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
            <p class="text-gray-600">Name</p>
            <p>{name}</p>
          </div>
          <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
            <p class="text-gray-600">Muscles</p>
            <p>{muscle}</p>
          </div>
      
          
        </div>
        <div className="p-3">
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More {muscle} excersices
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

export default Card;
