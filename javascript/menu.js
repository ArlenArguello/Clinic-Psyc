const navToggle = document.querySelector('.nav-toggle')
const menuArea = document.querySelector('.menu-area')

navToggle.addEventListener('click', () => {
    menuArea.classList.toggle('menu-area_visibile');
})