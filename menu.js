const menuIcon = document.querySelector(".menu-icon");
const menuLineTop = document.querySelector(".line-top");
const menuLineBottom = document.querySelector(".line-bottom");
const menuTray = document.querySelector(".menu-tray");
const navLinks = document.querySelectorAll(".nav-links");

let isMenuIconClicked = false;


const menuBtnClickHandler = () => {

    if (isMenuIconClicked === false) {
        isMenuIconClicked = true;
        menuLineTop.classList.add("line-1");
        menuLineBottom.classList.add("line-2");
        menuTray.classList.remove("close");
        menuTray.classList.add("open");

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("hide");
            navLinks[i].classList.add("show");
        }





    } else {
        isMenuIconClicked = false;
        menuLineTop.classList.remove("line-1");
        menuLineBottom.classList.remove("line-2");
        menuTray.classList.remove("open");
        menuTray.classList.add("close");

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("show");
            navLinks[i].classList.add("hide");
        }



    }

}

menuIcon.addEventListener("click", menuBtnClickHandler)