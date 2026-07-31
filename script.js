const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navbarContainer = document.getElementById("navbar");

openMenu.onclick = () => {
    closeMenu.style.display = "flex";
    openMenu.style.display = "none";
    navbarContainer.style.display = "flex"
}

closeMenu.onclick = () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    navbarContainer.style.display = "none"
}
