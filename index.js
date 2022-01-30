const wheel = document.querySelector('.wheel');
const filters = document.querySelector('.filters__block')
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const container = document.querySelector('.container');
const menuItemNames = document.querySelectorAll('.menu-item__name');
const headerStyles = getComputedStyle(header);

menu.onmouseenter = function(event) {
    menu.style.width = '298px';
    header.style.marginLeft = '300px';
    header.style.width = window.innerWidth-298+'px';
    menuItemNames.forEach(element => element.style.display = 'flex');
    container.style.marginLeft = '298px';

}

menu.onmouseleave = function(event) {
    menu.style.width = '120px';
    header.style.marginLeft = '122px';
    header.style.width = window.innerWidth-122+'px';
    menuItemNames.forEach(element => element.style.display = 'none');
    container.style.marginLeft = '122px';
}

wheel.addEventListener("click" , filterOpen)
let filtersOpenStatus = true;
function filterOpen() {
    if (filtersOpenStatus === true) {
        filters.style.display = 'none';
        filtersOpenStatus = false;
    } else {
    filters.style.display = 'block';
    filtersOpenStatus = true;
    }
}