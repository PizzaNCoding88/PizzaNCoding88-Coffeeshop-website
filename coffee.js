const closingButton = document.getElementById("navigation-menu__closing-button");
const sideMenu = document.querySelector(".navigation-menu");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
    if(!sideMenu.classList.contains("open")){
        sideMenu.classList.add("open");
    } else{
        sideMenu.classList.remove("open");
    }
})

closingButton.addEventListener("click", () => {
    if(!sideMenu.classList.contains("open")){
        sideMenu.classList.add("open");
    } else{
        sideMenu.classList.remove("open");
    }
})