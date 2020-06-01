type DarkModeState = {
  isEnabled: boolean;
};

const prefersDarkMode: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (prefersDarkMode) {
  document.documentElement.classList.add("mode-dark");
}

export const state: DarkModeState = {
  isEnabled: prefersDarkMode,
};
