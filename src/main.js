import './assets/css/style.css';
import { header, toggleDarkMode } from './layout/header/header.js';
import { setupSearchByCountry } from './components/search.js';
import { showFilterMenu, resetFilter } from './components/filter.js';
import { showSkeleton } from './components/skeleton.js';
import { initRegions, initCountries } from './components/countries.js';
import { initTheme } from './components/theme.js';

document.querySelector('#app').innerHTML = `
  ${header()}
  <main class="my-8">
    <section class="mb-5">
      <div class="container mx-auto p-4 md:flex md:justify-between md:items-center">
        <div class="flex justify-start items-center space-x-4 mb-10 p-4 bg-white rounded drop-shadow-lg transition-colors ease-in-out duration-500 md:w-1/3 md:mb-0 dark:bg-darkBlue">
          <ion-icon name="search-outline" class="text-darkGray transition-colors ease-in-out duration-500 dark:text-white"></ion-icon>
          <input
            type="search"
            id="searchCountry"
            class="w-full text-sm text-fgDarkBlue focus:outline-none transition-colors ease-in-out duration-500 md:text-base dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country..."
          />
        </div>
        <div class="flex justify-between items-center space-x-6">
          <div class="relative">
            <button
              id="dropdownBtn"
              class="flex justify-between items-center space-x-4 w-48 py-4 px-5 font-semibold bg-white text-fgDarkBlue rounded drop-shadow-lg transition-colors ease-in-out duration-500 dark:bg-darkBlue dark:text-white"
            >
              <span class="text-sm md:text-base">Filter by Region</span
              ><ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <div
              id="filterMenu"
              class="absolute z-10 hidden w-48 mt-4 p-4 font-semibold bg-white text-fgDarkBlue rounded drop-shadow-lg transition-colors ease-in-out duration-500
              dark:bg-darkBlue dark:text-white"
            >
              <ul id="regionLists"></ul>
            </div>
          </div>
          <button
            id="resetBtn"
            class="hidden w-48 py-4 px-5 text-sm font-semibold bg-white text-fgDarkBlue rounded drop-shadow-lg transition-colors ease-in-out duration-500 md:text-base
            dark:bg-darkBlue dark:text-white"
          >
            Reset
          </button>
      </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto p-4">
        <div id="countriesContainer" class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"></div>
      </div>
    </section>
  </main>
`;

showSkeleton();

window.addEventListener('load', () => {
  initTheme(document.getElementById('themeIcon'), document.getElementById('themeText'));
  initRegions();
  initCountries();
});

toggleDarkMode(document.getElementById('darkModeBtn'));
setupSearchByCountry(document.getElementById('searchCountry'));
// showFilterMenu(document.getElementById('dropdownBtn'));
// resetFilter(document.getElementById('resetBtn'));
