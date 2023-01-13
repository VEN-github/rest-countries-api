import { setupFilterByCountry } from './filter.js';

export async function initCountries() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();

    displayCountries(data);
  } catch (error) {
    console.error(error);
  }
}

export async function initRegions() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    const allRegion = [...new Set(data.map(data => data.region))];

    displayRegions(allRegion);
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleCountry(country) {
  try {
    const response = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await response.json();

    displaySingleCountry(data[0]);
  } catch (error) {
    console.error(error);
  }
}

export function backButton(element) {
  element.addEventListener('click', () => {
    history.back();
  });
}

function convertAlphaCodetoCountryName(code) {
  const countryListAlpha3 = {
    AFG: 'Afghanistan',
    ALB: 'Albania',
    DZA: 'Algeria',
    ASM: 'American Samoa',
    AND: 'Andorra',
    AGO: 'Angola',
    AIA: 'Anguilla',
    ATA: 'Antarctica',
    ATG: 'Antigua and Barbuda',
    ARG: 'Argentina',
    ARM: 'Armenia',
    ABW: 'Aruba',
    AUS: 'Australia',
    AUT: 'Austria',
    AZE: 'Azerbaijan',
    BHS: 'Bahamas',
    BHR: 'Bahrain',
    BGD: 'Bangladesh',
    BRB: 'Barbados',
    BLR: 'Belarus',
    BEL: 'Belgium',
    BLZ: 'Belize',
    BEN: 'Benin',
    BMU: 'Bermuda',
    BTN: 'Bhutan',
    BOL: 'Bolivia',
    BES: 'Bonaire, Sint Eustatius and Saba',
    BIH: 'Bosnia and Herzegovina',
    BWA: 'Botswana',
    BVT: 'Bouvet Island',
    BRA: 'Brazil',
    IOT: 'British Indian Ocean Territory',
    BRN: 'Brunei Darussalam',
    BGR: 'Bulgaria',
    BFA: 'Burkina Faso',
    BDI: 'Burundi',
    CPV: 'Cabo Verde',
    KHM: 'Cambodia',
    CMR: 'Cameroon',
    CAN: 'Canada',
    CYM: 'Cayman Islands',
    CAF: 'Central African Republic',
    TCD: 'Chad',
    CHL: 'Chile',
    CHN: 'China',
    CXR: 'Christmas Island',
    CCK: 'Cocos (Keeling) Islands',
    COL: 'Colombia',
    COM: 'Comoros',
    COD: 'Congo',
    COG: 'Congo',
    COK: 'Cook Islands',
    CRI: 'Costa Rica',
    HRV: 'Croatia',
    CUB: 'Cuba',
    CUW: 'Curaçao',
    CYP: 'Cyprus',
    CZE: 'Czechia',
    CIV: "Côte d'Ivoire",
    DNK: 'Denmark',
    DJI: 'Djibouti',
    DMA: 'Dominica',
    DOM: 'Dominican Republic',
    ECU: 'Ecuador',
    EGY: 'Egypt',
    SLV: 'El Salvador',
    GNQ: 'Equatorial Guinea',
    ERI: 'Eritrea',
    EST: 'Estonia',
    SWZ: 'Eswatini',
    ETH: 'Ethiopia',
    FLK: 'Falkland Islands',
    FRO: 'Faroe Islands',
    FJI: 'Fiji',
    FIN: 'Finland',
    FRA: 'France',
    GUF: 'French Guiana',
    PYF: 'French Polynesia',
    ATF: 'French Southern Territories',
    GAB: 'Gabon',
    GMB: 'Gambia',
    GEO: 'Georgia',
    DEU: 'Germany',
    GHA: 'Ghana',
    GIB: 'Gibraltar',
    GRC: 'Greece',
    GRL: 'Greenland',
    GRD: 'Grenada',
    GLP: 'Guadeloupe',
    GUM: 'Guam',
    GTM: 'Guatemala',
    GGY: 'Guernsey',
    GIN: 'Guinea',
    GNB: 'Guinea-Bissau',
    GUY: 'Guyana',
    HTI: 'Haiti',
    HMD: 'Heard Island and McDonald Islands',
    VAT: 'Holy See',
    HND: 'Honduras',
    HKG: 'Hong Kong',
    HUN: 'Hungary',
    ISL: 'Iceland',
    IND: 'India',
    IDN: 'Indonesia',
    IRN: 'Iran',
    IRQ: 'Iraq',
    IRL: 'Ireland',
    IMN: 'Isle of Man',
    ISR: 'Israel',
    ITA: 'Italy',
    JAM: 'Jamaica',
    JPN: 'Japan',
    JEY: 'Jersey',
    JOR: 'Jordan',
    KAZ: 'Kazakhstan',
    KEN: 'Kenya',
    KIR: 'Kiribati',
    PRK: "Korea (the Democratic People's Republic of)",
    KOR: 'Korea',
    KWT: 'Kuwait',
    KGZ: 'Kyrgyzstan',
    LAO: "Lao People's Democratic Republic",
    LVA: 'Latvia',
    LBN: 'Lebanon',
    LSO: 'Lesotho',
    LBR: 'Liberia',
    LBY: 'Libya',
    LIE: 'Liechtenstein',
    LTU: 'Lithuania',
    LUX: 'Luxembourg',
    MAC: 'Macao',
    MDG: 'Madagascar',
    MWI: 'Malawi',
    MYS: 'Malaysia',
    MDV: 'Maldives',
    MLI: 'Mali',
    MLT: 'Malta',
    MHL: 'Marshall Islands',
    MTQ: 'Martinique',
    MRT: 'Mauritania',
    MUS: 'Mauritius',
    MYT: 'Mayotte',
    MEX: 'Mexico',
    FSM: 'Micronesia',
    MDA: 'Moldova',
    MCO: 'Monaco',
    MNG: 'Mongolia',
    MNE: 'Montenegro',
    MSR: 'Montserrat',
    MAR: 'Morocco',
    MOZ: 'Mozambique',
    MMR: 'Myanmar',
    NAM: 'Namibia',
    NRU: 'Nauru',
    NPL: 'Nepal',
    NLD: 'Netherlands',
    NCL: 'New Caledonia',
    NZL: 'New Zealand',
    NIC: 'Nicaragua',
    NER: 'Niger',
    NGA: 'Nigeria',
    NIU: 'Niue',
    NFK: 'Norfolk Island',
    MNP: 'Northern Mariana Islands',
    NOR: 'Norway',
    OMN: 'Oman',
    PAK: 'Pakistan',
    PLW: 'Palau',
    PSE: 'Palestine, State of',
    PAN: 'Panama',
    PNG: 'Papua New Guinea',
    PRY: 'Paraguay',
    PER: 'Peru',
    PHL: 'Philippines',
    PCN: 'Pitcairn',
    POL: 'Poland',
    PRT: 'Portugal',
    PRI: 'Puerto Rico',
    QAT: 'Qatar',
    MKD: 'Republic of North Macedonia',
    ROU: 'Romania',
    RUS: 'Russian Federation',
    RWA: 'Rwanda',
    REU: 'Réunion',
    BLM: 'Saint Barthélemy',
    SHN: 'Saint Helena, Ascension and Tristan da Cunha',
    KNA: 'Saint Kitts and Nevis',
    LCA: 'Saint Lucia',
    MAF: 'Saint Martin',
    SPM: 'Saint Pierre and Miquelon',
    VCT: 'Saint Vincent and the Grenadines',
    WSM: 'Samoa',
    SMR: 'San Marino',
    STP: 'Sao Tome and Principe',
    SAU: 'Saudi Arabia',
    SEN: 'Senegal',
    SRB: 'Serbia',
    SYC: 'Seychelles',
    SLE: 'Sierra Leone',
    SGP: 'Singapore',
    SXM: 'Sint Maarten',
    SVK: 'Slovakia',
    SVN: 'Slovenia',
    SLB: 'Solomon Islands',
    SOM: 'Somalia',
    ZAF: 'South Africa',
    SGS: 'South Georgia and the South Sandwich Islands',
    SSD: 'South Sudan',
    ESP: 'Spain',
    LKA: 'Sri Lanka',
    SDN: 'Sudan',
    SUR: 'Suriname',
    SJM: 'Svalbard and Jan Mayen',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    SYR: 'Syrian Arab Republic',
    TWN: 'Taiwan',
    TJK: 'Tajikistan',
    TZA: 'Tanzania, United Republic of',
    THA: 'Thailand',
    TLS: 'Timor-Leste',
    TGO: 'Togo',
    TKL: 'Tokelau',
    TON: 'Tonga',
    TTO: 'Trinidad and Tobago',
    TUN: 'Tunisia',
    TUR: 'Turkey',
    TKM: 'Turkmenistan',
    TCA: 'Turks and Caicos Islands',
    TUV: 'Tuvalu',
    UGA: 'Uganda',
    UKR: 'Ukraine',
    ARE: 'United Arab Emirates',
    GBR: 'United Kingdom of Great Britain and Northern Ireland',
    UMI: 'United States Minor Outlying Islands',
    USA: 'United States of America',
    URY: 'Uruguay',
    UZB: 'Uzbekistan',
    VUT: 'Vanuatu',
    VEN: 'Venezuela',
    VNM: 'Viet Nam',
    VGB: 'Virgin Islands (British)',
    VIR: 'Virgin Islands (U.S.)',
    WLF: 'Wallis and Futuna',
    ESH: 'Western Sahara',
    YEM: 'Yemen',
    ZMB: 'Zambia',
    ZWE: 'Zimbabwe',
    ALA: 'Åland Islands',
  };

  if (countryListAlpha3.hasOwnProperty(code)) {
    return countryListAlpha3[code];
  }
}

export function displayRegions(data) {
  const container = document.getElementById('regionLists');
  let list = '';

  data.forEach(region => {
    list += `
      <li class="mb-1.5 text-sm cursor-pointer transition ease-out hover:text-darkGray md:text-base last:mb-0">${region}</li>
    `;
  });
  container.innerHTML = list;
  setupFilterByCountry(container);
}

export function displayCountries(data) {
  const container = document.getElementById('countriesContainer');
  let template = '';
  container.innerHTML = '';

  data.forEach(({ flag, name, population, region, capital = 'N/A' }) => {
    const formattedPopulation = new Intl.NumberFormat('en-US').format(population);
    const formattedLink = `/#/country/${name.replace(/\s+/g, '-').toLowerCase()}`;

    template += `
    <div class="bg-white rounded drop-shadow-lg transition-all ease-in-out duration-500 hover:scale-105 dark:bg-darkBlue">
      <a href="${formattedLink}">
        <img
          class="w-full object-cover rounded-t md:h-48"
          src="${flag}"
          alt="${flag}"
        />
      </a>
      <div class="pt-5 pb-10 px-6">
        <h4 class="mb-2 text-lg font-extrabold text-fgDarkBlue transition-all ease-in-out duration-500 hover:text-darkGray dark:text-white">
          <a href="${formattedLink}">${name}</a>
        </h4>
        <p class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 dark:text-white">
          Population: <span class="font-normal dark:text-lightGray">${formattedPopulation}</span>
        </p>
        <p class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 dark:text-white">
          Region: <span class="font-normal dark:text-lightGray">${region}</span>
        </p>
        <p class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 dark:text-white">
          Capital: <span class="font-normal dark:text-lightGray">${capital}</span>
        </p>
      </div>
    </div>
  `;
  });
  container.innerHTML = template;
}

function displaySingleCountry({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital = null,
  topLevelDomain,
  currencies = null,
  languages = null,
  borders = null,
}) {
  const container = document.getElementById('countryContainer');
  container.innerHTML = '';
  const formattedPopulation = new Intl.NumberFormat('en-US').format(population);
  let template = '';
  let borderCountries = '';

  if (borders) {
    let borderCountriesBtn = '';

    borders.forEach(border => {
      if (convertAlphaCodetoCountryName(border) != undefined) {
        const formattedLink = `/#/country/${convertAlphaCodetoCountryName(border)
          .replace(/\s+/g, '-')
          .toLowerCase()}`;
        borderCountriesBtn += `
          <a
          class="py-1.5 px-4 text-sm bg-white text-fgDarkBlue rounded drop-shadow-lg transition-colors ease-in-out duration-500 md:text-base dark:bg-darkBlue dark:text-white" href="${formattedLink}"
        >${convertAlphaCodetoCountryName(border)}</a
        >
        `;
      }
    });

    borderCountries = `
      <div class="xl:flex xl:space-x-4 xl:items-center">
        <h4 class="mb-2 text-base font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 xl:mb-0 dark:text-white">
          Border Countries:
        </h4>
        <div class="flex items-center flex-wrap gap-4">
          ${borderCountriesBtn}
        </div>
      </div>
    `;
  }

  template = `
    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 md:gap-x-28">
      <img class="mb-10 md:mb-0" src="${flag}" alt="${flag}" />
      <div class="self-center">
        <h4
          class="mb-5 text-xl font-extrabold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-7 md:text-3xl dark:text-white"
        >
          ${name}
        </h4>
        <div class="grid grid-cols-1 lg:grid-cols-2 md:mb-14">
          <div class="mb-10 lg:mb-0">
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Native Name: <span class="font-normal dark:text-lightGray">${nativeName}</span>
            </p>
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Population: <span class="font-normal dark:text-lightGray">${formattedPopulation}</span>
            </p>
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Region: <span class="font-normal dark:text-lightGray">${region}</span>
            </p>
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Sub Region: <span class="font-normal dark:text-lightGray">${subregion}</span>
            </p>
            <p
              class="text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:text-base dark:text-white"
            >
              Capital: <span class="font-normal dark:text-lightGray">${capital ?? 'N/A'}</span>
            </p>
          </div>
          <div class="mb-10 md:mb-0">
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Top Level Domain: <span class="font-normal dark:text-lightGray">${topLevelDomain}</span>
            </p>
            <p
              class="mb-1 text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:mb-2 md:text-base dark:text-white"
            >
              Currencies: <span class="font-normal dark:text-lightGray">${
                currencies ? currencies[0]?.name : 'N/A'
              }</span>
            </p>
            <p
              class="text-sm font-semibold text-fgDarkBlue transition-colors ease-in-out duration-500 md:text-base dark:text-white"
            >
              Languages: <span class="font-normal dark:text-lightGray">${
                languages ? languages[0]?.name : 'N/A'
              }</span>
            </p>
          </div>
        </div>
        ${borderCountries}
      </div>
    </div>
  `;
  container.innerHTML = template;
}
