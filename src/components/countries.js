export async function initCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    displayCountries(data);
  } catch (error) {
    console.error(error);
  }
}

export async function initRegions() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    const allRegion = [...new Set(data.map(data => data.region))];

    displayRegions(allRegion);
  } catch (error) {
    console.error(error);
  }
}

export function displayRegions(data) {
  const container = document.getElementById('regionLists');
  let list = '';

  data.forEach((region, index, array) => {
    if (index === array.length - 1) {
      list += `
      <li class="text-sm cursor-pointer transition ease-out hover:text-darkGray md:text-base">${region}</li>
    `;
    } else {
      list += `
      <li class="mb-1.5 text-sm cursor-pointer transition ease-out hover:text-darkGray md:text-base">${region}</li>
    `;
    }
  });
  container.innerHTML = list;
}

export function displayCountries(data) {
  const container = document.getElementById('countriesContainer');
  let template = '';
  container.innerHTML = '';

  data.forEach(({ flags: { svg }, name: { common }, population, region, capital = 'N/A' }) => {
    const formattedPopulation = new Intl.NumberFormat('en-US').format(population);

    template += `
    <div class="bg-white text-fgDarkBlue rounded drop-shadow-lg transition ease-in-out hover:scale-105 dark:bg-darkBlue
    dark:text-white">
      <a href="#">
        <img
          class="w-full object-cover rounded-t md:h-48"
          src="${svg}"
          alt="${svg}"
        />
      </a>
      <div class="pt-5 pb-10 px-6">
        <h4 class="mb-2 text-lg font-extrabold transition ease-out hover:text-darkGray">
          <a href="#">${common}</a>
        </h4>
        <p class="mb-1 text-sm font-semibold">
          Population: <span class="font-normal">${formattedPopulation}</span>
        </p>
        <p class="mb-1 text-sm font-semibold">
          Region: <span class="font-normal">${region}</span>
        </p>
        <p class="mb-1 text-sm font-semibold">
          Capital: <span class="font-normal">${capital}</span>
        </p>
      </div>
    </div>
  `;
  });
  container.innerHTML = template;
}
