const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeToggleBtn.classList.add('dark-mode');
    } else {
        themeToggleBtn.classList.remove('dark-mode');
    }
}
