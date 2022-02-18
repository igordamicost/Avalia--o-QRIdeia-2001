// open and close menu
let nav = document.querySelector("#hamburguer"); //Used for open and close//
let menu = document.querySelector("#menu");
let workst = document.querySelector("#workst");
let btn = document.querySelector(".menu"); //Used for open and close//
console.log(nav)
console.log(menu)
console.log(hamburguer)
console.log(workst)

nav.addEventListener('click', function(){
    console.log('clicou')
    menu.classList.toggle('close')
    menuBtnChange();
})
nav.addEventListener('click', function(){
    console.log('clicou')
    workst.classList.toggle('close')
    menuBtnChange();
})
// open and close menu
// toggle button menu

function menuBtnChange() {
    if(btn.classList.contains("close")){
        nav.classList.replace("bx-menu-alt-left", "bx-menu");
    }else {
        nav.classList.replace("bx-menu","bx-menu-alt-left");
}}