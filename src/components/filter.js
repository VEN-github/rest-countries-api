import { showMainSkeleton } from './skeleton.js';
import { displayCountries, initCountries } from './countries.js';

export function toggleFilter(element) {
  element.addEventListener('click', () => {
    const filterMenu = document.getElementById('filterMenu');
    filterMenu.classList.toggle('hidden');
  });
}

export function setupFilterByCountry(element) {
  for (const region of element.children) {
    region.addEventListener('click', filterByRegion);
  }
}

async function filterByRegion(event) {
  const region = event.target.textContent.toLowerCase();
  const filterMenu = document.getElementById('filterMenu');
  const resetBtn = document.getElementById('resetBtn');

  resetBtn.classList.remove('hidden');
  filterMenu.classList.add('hidden');
  showMainSkeleton();

  try {
    const response = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = await response.json();

    displayCountries(data);
  } catch (error) {
    console.error(error);
  }
}

export function resetFilter(element) {
  element.addEventListener('click', () => {
    element.classList.add('hidden');
    showMainSkeleton();
    initCountries();
  });
}
