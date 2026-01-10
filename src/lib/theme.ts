export function applyPreferedTheme() {
  const theme = getPreferedTheme();
  document.documentElement.classList.add(theme);
}

export const toggleTheme = () => {
  const currentTheme = getPreferedTheme();
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(nextTheme);
  localStorage.setItem('theme', nextTheme);
};

function getPreferedTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
