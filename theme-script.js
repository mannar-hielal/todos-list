const themeSwitch = document.getElementById('themeSwitch');
const switcher = document.querySelector(".switch");

// make sure switch exists
if (themeSwitch) {
    initTheme();
    themeSwitch.addEventListener("change", e => {
        resetTheme();
    })
}

function initTheme() {
    // see if LS has dark theme
    const darkTehemSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');

    // if LS has dark theme then activate it, otherwise activate the default
    themeSwitch.checked = darkTehemSelected;
    darkTehemSelected ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "default");
}

function resetTheme() {
    if (themeSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("themeSwitch", "dark");
    } else {
        document.body.setAttribute("data-theme", "default")
        localStorage.setItem("themeSwitch", "default");
    }
}
