









let count = 0;
function initate() {
    count = 0;

}




function toggleMenu() {
    if (count == 0) {
        menu.classList.toggle("menu_open")
        count = 1;
    }
    else {
        menu.classList.toggle("menu_closed");
        menu.classList.toggle("menu_open")
    }
}