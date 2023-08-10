let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar ul')
let closeMenu = document.querySelector('#closeMenu')


menu.onclick = () => {
    menu.classList.toggle('bi-list');
    navbar.classList.toggle('active');

};
closeMenu.onclick = () => {
    closeMenu.classList.remove('bi-x');
    navbar.classList.remove('active');
    menu.classList.toggle('bi-list');

};

    