const closingButton = document.getElementById("navigation-menu__closing-button");
const sideMenu = document.querySelector(".navigation-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", overlaySideMenu);
closingButton.addEventListener("click", overlaySideMenu);
overlay.addEventListener("click", overlaySideMenu);

function overlaySideMenu(){
    if(!sideMenu.classList.contains("open")){
        sideMenu.classList.add("open");
        overlay.classList.add("overlay-active");
    } else{
        sideMenu.classList.remove("open");
        overlay.classList.remove("overlay-active");
    }
}


// MAP 
