const botaoMenu = document.getElementById("botaoMenu")

const botaoFechar = document.getElementById("botaoFechar")

const menuLateral = document.getElementById("menuLateral")

botaoMenu.addEventListener("click", function(){

    menuLateral.classList.add("aberto")

});

botaoFechar.addEventListener("click", function(){

    menuLateral.classList.remove("aberto")

});

console.log(botaoMenu);