const themeToggleLight = document.getElementById('theme-toggle-light');
const themeToggleDark = document.getElementById('theme-toggle-dark');
const themeToggleCyberpunk = document.getElementById('theme-toggle-cyberpunk');

// Check for preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = prefersDarkMode ? 'dark' : 'light';

// Apply the initial theme
document.documentElement.setAttribute('data-theme', initialTheme);
highlightActiveTheme(initialTheme);

// Theme toggle event listeners
themeToggleLight.addEventListener('click', () => setTheme('light'));
themeToggleDark.addEventListener('click', () => setTheme('dark'));
themeToggleCyberpunk.addEventListener('click', () => setTheme('cyberpunk'));

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    highlightActiveTheme(theme);
}

function highlightActiveTheme(theme) {
    // Remove active class from all buttons
    themeToggleLight.style.opacity = '0.5';
    themeToggleDark.style.opacity = '0.5';
    themeToggleCyberpunk.style.opacity = '0.5';
    
    // Add active class to current theme button
    if (theme === 'light') {
        themeToggleLight.style.opacity = '1';
    } else if (theme === 'dark') {
        themeToggleDark.style.opacity = '1';
    } else if (theme === 'cyberpunk') {
        themeToggleCyberpunk.style.opacity = '1';
    }
}