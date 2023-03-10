export function createMainContent(element) {
  const template = `
    <section class="mb-5">
      <div class="container mx-auto p-4 md:flex md:justify-between md:items-center">
        <div class="flex justify-start items-center space-x-4 mb-10 p-4 bg-white rounded drop-shadow-lg transition-colors ease-in-out duration-500 md:w-1/3 md:mb-0 dark:bg-darkBlue">
          <ion-icon name="search-outline" class="text-darkGray transition-colors ease-in-out duration-500 dark:text-white"></ion-icon>
          <input
            type="search"
            id="searchCountry"
            class="w-full text-sm text-fgDarkBlue focus:outline-none transition-colors ease-in-out duration-500 md:text-base dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country..."
            autocomplete="off"
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
  `;
  element.innerHTML = template;
}

export function createSingleContent(element) {
  const template = `
    <section>
      <div class="container mx-auto py-8 px-4">
        <button id="backBtn" class="flex items-center space-x-2 py-2 px-8 text-sm bg-white text-fgDarkBlue rounded drop-shadow-lg transition-colors ease-in-out duration-500 md:text-base dark:bg-darkBlue dark:text-white"
        >
          <ion-icon name="arrow-back-outline"></ion-icon><span>Back</span>
        </button>
        <div id="countryContainer"></div>
      </div>
    </section>
  `;
  element.innerHTML = template;
}
