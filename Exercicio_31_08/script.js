
const botaoAbrirMenu = document.getElementById('botaoabrirmenu');

const menuLateral = document.getElementById('menuLateral');

const botaoFecharMenu = document.getElementById('fecharmenu');

const overlay = document.getElementById('overlay');

const img1 = document.querySelector('.img1');

const img2 = document.querySelector('.img2');

console.log(overlay);


botaoAbrirMenu.addEventListener("click",function() {

    menuLateral.classList.toggle("aberto");
    overlay.classList.add("ativo");
    });

botaoFecharMenu.addEventListener("click",function() {
  
    menuLateral.classList.remove("aberto");
    overlay.classList.remove("ativo");


  });

  overlay.addEventListener("click",function() {
    menuLateral.classList.remove("aberto");
    overlay.classList.remove("ativo");
  });
  
  img1.addEventListener("click",function() {
    window.location.href = "category_tvs.html";
  });

  img2.addEventListener("click",function() {
    window.location.href = "category_acessoris.html";
  });