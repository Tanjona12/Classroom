import React from "react";

const Cours = () => {
  return (
    <div className="pt-24 pl-72 pr-8">
      <div>
        <form class="max-w-sm mx-auto">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Titre :
          </label>
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Chapitre I ..."
            required
          />
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Message :
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Annoncez quelque chose à votre classe"
          ></textarea>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Importer le fichier :
          </label>
          <input
            type="file"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            class="mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="pt-7">
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p className="dark:text-white">12 fév 2024</p>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            St ay up to date and move work forward with Flowbite on iOS &
            Android. Download the app today.
          </p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <div class="text-left rtl:text-right pl-1">
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Visualiser
                </div>
              </div>
            </a>
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div class="text-left rtl:text-right pl-1">
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Télécharger
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
