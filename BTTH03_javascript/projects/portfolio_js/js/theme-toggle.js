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

const savedTheme = localStorage.getItem('portfolio_theme');
if (savedTheme) {
    setTheme(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
});

if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio_theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
