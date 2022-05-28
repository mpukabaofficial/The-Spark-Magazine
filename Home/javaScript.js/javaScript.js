const button = document.getElementById("btn");
const menu = document.querySelector(".collected-menu")

menu.style.display = "none" ;

button.addEventListener("click", (event) =>{
    if(menu.style.display = "none"){
        menu.style.display = "block"
    }
    else if (menu.style.display = "block"){
        menu.style.display = "none"
    }
})
