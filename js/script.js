// JS FOR HMENU CLICK FOR SIDEBAR
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hmenu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// JS FOR HMENU FOR SIDEBAR
const hmenus = document.querySelector('#hmenu');
document.addEventListener('click', function (e) {
    if (!hmenus.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})