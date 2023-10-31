window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalAdding.style.display = 'none';
        modalDetail.style.display = 'none';
        modalAddProduct.style.display = 'none';
        navbarNav.classList.remove('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
    }
});

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

// JS FOR SHOPPING CART CLICK FOR OPEN CART
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart').onclick = () => {
    shoppingCart.classList.toggle('active');
}

// JS FOR HMENU FOR SIDEBAR CLICK ANYWHERE
const hmenus = document.querySelector('#hmenu');
document.addEventListener('click', function (e) {
    if (!hmenus.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// JS FOR SEARCH FORM FOR CLICK ANYWHERE
const searchbt = document.querySelector('#search-button');
document.addEventListener('click', function (e) {
    if (!searchbt.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

// JS FOR SHOPPING CART FOR CLICK ANYWHERE
const shopCart = document.querySelector('#shopping-cart');
document.addEventListener('click', function (e) {
    if (!shopCart.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})

// JS FOR MODAL DETAIL FOR CLICK ANYWHERE
const modalDetail = document.querySelector('#detail-modal');
const buttonDetails = document.querySelectorAll('.detail-modal');
window.onclick = (e) => {
    if (e.target === modalDetail) {
        modalDetail.style.display = 'none';
    }
}
// JS FOR MODAL ITEM CLICK FOR OPEN MODAL DETAIL
buttonDetails.forEach((btn) => {
    btn.onclick = (e) => {
        modalDetail.style.display = 'flex';
    }
})

// JS FOR MODAL ITEM CLICK FOR CLOSE MODAL DETAIL
document.querySelector('.close-button').onclick = (e) => {
    modalDetail.style.display = 'none';
}

// JS FOR MODAL ADD PRODUCT CLICK FOR OPEN MODAL ADD PRODUCT PIN
const modalAdding = document.querySelector('#addproduct-modal');
const buttonAdding = document.querySelector('.addproduct-modal');
const pinAdding = document.querySelector('#pin');
buttonAdding.onclick = () => {
    modalAdding.style.display = 'flex';
    pinAdding.focus();
}

// JS FOR MODAL ADD PRODUCT CLICK FOR CLOSE MODAL ADD PRODUCT PIN
document.querySelector('.close-button-2').onclick = () => {
    modalAdding.style.display = 'none';
}

// JS FOR MODAL ADD PRODUCT CLICK FOR OPEN MODAL ADD PRODUCT
const modalAddProduct = document.querySelector('#addproduct-modal-2');
const buttonAddProduct = document.querySelector('#buttonSubmitAdd');
buttonAddProduct.onclick = () => {
    if (pinAdding.value.trim() === "000") {
        modalAddProduct.style.display = 'flex';
        modalAdding.style.display = 'none';
        event.preventDefault();
        pinAdding.value = '';
    } else {
        alert("Wrong PIN, please try again");
        event.preventDefault();
        pinAdding.value = '';
        pinAdding.focus();
    }
}

// JS FOR MODAL ADD PRODUCT CLICK FOR CLOSE MODAL ADD PRODUCT
document.querySelector('.close-button-3').onclick = () => {
    modalAddProduct.style.display = 'none';
}
