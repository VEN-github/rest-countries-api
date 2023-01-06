export function getTheme() {
  const theme = JSON.parse(localStorage.getItem('theme')) ?? 'light';
  return theme;
}

export function initTheme(icon, text) {
  getTheme() === 'light' ? setLightTheme(icon, text) : setDarkTheme(icon, text);
}

export function setLightTheme(icon, text) {
  document.documentElement.classList.remove('dark');
  icon.setAttribute('name', 'moon-outline');
  text.innerHTML = 'Dark Mode';
  localStorage.setItem('theme', JSON.stringify('light'));
}

export function setDarkTheme(icon, text) {
  document.documentElement.classList.add('dark');
  icon.setAttribute('name', 'moon');
  text.innerHTML = 'Light Mode';
  localStorage.setItem('theme', JSON.stringify('dark'));
}
