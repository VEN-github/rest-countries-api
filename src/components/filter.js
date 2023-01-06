import { displayCountries, initCountries } from './countries.js';
import { showSkeleton } from './skeleton.js';

// export async function initFilterMenu(element) {
//   let list = '';

//   try {
//     const response = await fetch('https://restcountries.com/v3.1/all');
//     const data = await response.json();

//     const allRegion = [...new Set(data.map(data => data.region))];

//     allRegion.forEach((region, index, array) => {
//       if (index === array.length - 1) {
//         list += `
//         <li class="text-sm cursor-pointer transition ease-out hover:text-darkGray md:text-base">${region}</li>
//       `;
//       } else {
//         list += `
//         <li class="mb-1.5 text-sm cursor-pointer transition ease-out hover:text-darkGray md:text-base">${region}</li>
//       `;
//       }
//     });
//     element.innerHTML = list;

//     for (const region of element.children) {
//       region.addEventListener('click', filterByRegion);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export function showFilterMenu(element) {
  element.addEventListener('click', () => {
    const filterMenu = document.getElementById('filterMenu');
    filterMenu.classList.toggle('hidden');
  });
}

async function filterByRegion(event) {
  const region = event.target.textContent.toLowerCase();
  const filterMenu = document.getElementById('filterMenu');
  const resetBtn = document.getElementById('resetBtn');

  resetBtn.classList.remove('hidden');
  filterMenu.classList.add('hidden');
  showSkeleton();

  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();

    displayCountries(data);
  } catch (error) {
    console.error(error);
  }
}

export function resetFilter(element) {
  element.addEventListener('click', () => {
    element.classList.add('hidden');
    showSkeleton();
    initCountries();
  });
}
