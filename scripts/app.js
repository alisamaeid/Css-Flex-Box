

let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click",function (){
    // when icon is fa-bars click on this will show navigation items 
    // when icon is fa=times click on this will remove navigation items
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})