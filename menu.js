const menuIcon = document.querySelector(".menu-icon");
const menuLineTop = document.querySelector(".line-top");
const menuLineBottom = document.querySelector(".line-bottom");
let isMenuIconClicked = false;


const menuBtnClickHandler = () => {

    if (isMenuIconClicked === false) {
        isMenuIconClicked = true;
        menuLineTop.classList.add("line-1");
        menuLineBottom.classList.add("line-2");
    } else {
        isMenuIconClicked = false;
        menuLineTop.classList.remove("line-1");
        menuLineBottom.classList.remove("line-2");
    }

}

menuIcon.addEventListener("click", menuBtnClickHandler)