import { getTheme, setLightTheme, setDarkTheme } from '../../components/theme.js';

export function header() {
  const template = `
    <header class="w-full bg-white shadow-md transition-colors ease-in-out duration-500 dark:bg-darkBlue">
      <div class="flex justify-between items-center container mx-auto py-8 px-4">
        <h1 class="font-extrabold text-fgDarkBlue transition-colors ease-in-out duration-500 md:text-2xl dark:text-white">Where in the World?</h1>
        <button id="darkModeBtn" class="flex justify-between items-center space-x-1.5 font-semibold">
          <ion-icon id="themeIcon" name="moon-outline" class="transition-colors ease-in-out duration-500 dark:text-white"></ion-icon>
          <span id="themeText" class="text-sm transition-colors ease-in-out duration-500 md:text-lg dark:text-white">Dark Mode</span>
        </button>
      </div>
    </header>
  `;
  return template;
}

export function toggleDarkMode(element) {
  element.addEventListener('click', () => {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');

    getTheme() === 'light'
      ? setDarkTheme(themeIcon, themeText)
      : setLightTheme(themeIcon, themeText);
  });
}
