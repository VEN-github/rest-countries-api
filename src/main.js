import './assets/css/style.css';
import { header, toggleDarkMode } from './layout/header/header.js';
import { createMainContent, createSingleContent } from './layout/content/content.js';
import { setupSearchByCountry } from './components/search.js';
import { toggleFilter, resetFilter } from './components/filter.js';
import { showMainSkeleton, showSinglePageSkeleton } from './components/skeleton.js';
import {
  initRegions,
  initCountries,
  getSingleCountry,
  backButton,
} from './components/countries.js';
import { initTheme } from './components/theme.js';

document.querySelector('#app').innerHTML = `
  ${header()}
  <main id="main" class="my-8"></main>
`;

function init() {
  const countryName = window.location.hash.split('/')[2];

  if (countryName == undefined) {
    createMainContent(document.getElementById('main'));
    showMainSkeleton();
    initRegions();
    setupSearchByCountry(document.getElementById('searchCountry'));
    toggleFilter(document.getElementById('dropdownBtn'));
    resetFilter(document.getElementById('resetBtn'));
    initCountries();
    return;
  }

  createSingleContent(document.getElementById('main'));
  showSinglePageSkeleton();
  backButton(document.getElementById('backBtn'));
  getSingleCountry(countryName.replace(/-/g, ' '));
}

window.addEventListener('load', () => {
  initTheme(document.getElementById('themeIcon'), document.getElementById('themeText'));
  init();
});

window.addEventListener('hashchange', () => {
  init();
});

toggleDarkMode(document.getElementById('darkModeBtn'));
