// JS FOR CLOSE ALL WIRH ESCAPE KEY
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalAdding.style.display = 'none';
        modalAddProduct.style.display = 'none';
        modalCont.forEach(modal => {
            modal.style.display = 'none';
        });
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

// JS FOR MODAL ITEM CLICK FOR OPEN MODAL DETAIL
const buttonDetails = document.querySelectorAll('.detail-modal');
const buttonCloseDetails = document.querySelectorAll('.close-button');
const modalCont = document.querySelectorAll('.modal');
buttonDetails.forEach(link => {
    link.addEventListener('click', () => {
        const modalId = link.getAttribute('data-modal-id');
        const modal = document.getElementById(`detail-modal${modalId}`);
        modal.style.display = 'flex';
    });
});

// JS FOR MODAL ITEM CLICK FOR CLOSE MODAL DETAIL
buttonCloseDetails.forEach(link => {
    link.addEventListener('click', () => {
        const modalId = link.getAttribute('data-modal-id');
        const modal = document.getElementById(`detail-modal${modalId}`);
        modal.style.display = 'none';
    });
});


// JS FOR MODAL DETAIL FOR CLICK ANYWHERE
modalCont.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// ALL VARIABLES INPUT
const pinAdding = document.querySelector('#pin'); // INPUT PIN FROM USER
const inputName = document.querySelector('#productName'); // INPUT PRODUCT NAME 
// ALL VARIABLES MODAL
const modalAdding = document.querySelector('#addproduct-modal'); // MODAL INPUT PIN 
const modalAddProduct = document.querySelector('#addproduct-modal-2'); // MODAL ADD NEW PRODUCT
// ALL VARIABLES BUTTON
const buttonAdding = document.querySelector('.addproduct-modal'); // BUTTON OPEN PIN VALIDATION
const buttonAddProduct = document.querySelector('#buttonSubmitAdd'); // BUTTON PIN VALIDATION
// ALL OTHERS VARIABLES 
const registeredPins = ['0001', '251004', '777'];

// OPEN PIN MODAL FUNCTIONS
buttonAdding.onclick = () => {
    modalAdding.style.display = 'flex';
    pinAdding.focus();
}

// CLOSE PIN MODAL FUNCTIONS
document.querySelector('.close-button-2').onclick = () => {
    modalAdding.style.display = 'none';
}

// VALIDATION PIN #1
// buttonAddProduct.onclick = () => {
//     if (pinAdding.value.trim() === "251004") {
//         modalAddProduct.style.display = 'flex';
//         inputName.focus();
//         modalAdding.style.display = 'none';
//         event.preventDefault();
//         pinAdding.value = '';
//     } else {
//         alert("Wrong PIN, please try again");
//         event.preventDefault();
//         pinAdding.value = '';
//         pinAdding.focus();
//     }
// }

// VALIDATION PIN #2
buttonAddProduct.addEventListener('click', function() {
    const userEnteredPin = pinAdding.value;
    if (userEnteredPin === '') {
      alert('PIN cannot be empty');
    } else if (userEnteredPin % 1 !== 0 || userEnteredPin < 0) {
      alert('PIN must be a whole number and greater than 0');
    } else if (registeredPins.includes(userEnteredPin)) {
        modalAddProduct.style.display = 'flex';
        inputName.focus();
        modalAdding.style.display = 'none';
        event.preventDefault();
        pinAdding.value = '';
    } else {
        alert("Wrong PIN, please try again");
        event.preventDefault();
        pinAdding.value = '';
        pinAdding.focus();
    }
});

// CLOSE ADD PRODUCT MODAL
document.querySelector('.close-button-3').onclick = () => {
    modalAddProduct.style.display = 'none';
}
