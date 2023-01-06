import { showSkeleton } from './skeleton.js';
import { initCountries, displayCountries } from './countries.js';

export function setupSearchByCountry(element) {
  let timer;
  const MILLISECONDS = 1500;

  element.addEventListener('input', () => {
    showSkeleton();
    clearTimeout(timer);

    if (element.value) {
      timer = setTimeout(searchByCountryName, MILLISECONDS, element);
    } else {
      initCountries();
    }
  });
}

async function searchByCountryName(event) {
  const countryName = event.value.toLowerCase().trim();

  try {
    if (countryName === '') return;

    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

    if (response.status == 200) {
      const data = await response.json();
      displayCountries(data);
    } else {
      initCountries();
      const { message } = await response.json();
      alert(message);
      event.value = '';
      event.blur();
    }
  } catch (error) {
    console.error(error);
  }
}
