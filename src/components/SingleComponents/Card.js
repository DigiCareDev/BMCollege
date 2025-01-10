import React from "react";
import Link from "next/link";

function Card({ image, title, description }) {
  return (
    <div className="w-72 mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="rounded-t-lg w-full h-40 object-cover"
            src={image}
            alt={title}
          />
        </Link>
        <div className="p-4">
          <Link href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
