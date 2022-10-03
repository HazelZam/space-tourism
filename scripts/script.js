function openMenu() {
    const menuIcon = document.querySelector(".icon-menu");
    const closeIcon = document.querySelector(".icon-close");
    const menu = document.querySelector(".menu")
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    menu.style.display = "block"
}

function closeMenu() {
    const iconMenu = document.querySelector(".icon-menu");
    const iconClose = document.querySelector(".icon-close");
    const menu = document.querySelector(".menu")
    iconMenu.style.display = "block"
    iconClose.style.display = "none"
    menu.style.display = "none"
    }