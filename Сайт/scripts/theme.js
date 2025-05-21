const themeToggle = document.getElementById('toggle-theme');
const root = document.documentElement;

function switchTheme() {
    if (root.classList.contains('dark')) {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', switchTheme);

if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
}
