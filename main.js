function combioColor() {
    var elemento = document.getElementById("body") 
    elemento.classList.toggle("cambio-color")
}

const toggle = document.querySelector(".active")
const menu = document.querySelector(".menu")

toggle.addEventListener("click", () => {
    menu.classList.toggle("menu-active")
})