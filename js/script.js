// JS FOR HMENU CLICK FOR OPEN SIDEBAR
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hmenu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// JS FOR SEARCH FORM CLICK FOR OPEN SEARCH
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
}

// JS FOR HMENU FOR SIDEBAR CLICK ANYWHERE
const hmenus = document.querySelector('#hmenu');
document.addEventListener('click', function (e) {
    if (!hmenus.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// JS FOR SEARCH FORM FOR  CLICK ANYWHERE
const searchbt = document.querySelector('#search-button');
document.addEventListener('click', function (e) {
    if (!searchbt.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})
