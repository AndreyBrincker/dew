// Estamos criando uma variável constante (const = não pode ser reatribuída depois)
    // chamada "botaoAbrir". O valor dela vem do que está à direita do "=".
    // "document" = a página inteira carregada no navegador.
    // ".getElementById('botaoAbrir')" = dentro do document, procure o elemento
    // que tem id="botaoAbrir" no HTML.
    // Resultado: a variável botaoAbrir passa a "ser" aquele botão específico.
    const botaoAbrir = document.getElementById("botaoAbrir");

    // Mesma lógica, mas agora pegando o botão de fechar (id="botaoFechar" no HTML)
    const botaoFechar = document.getElementById('botaoFechar');

    // Mesma lógica, agora pegando o <nav id="menuLateral"> do HTML.
    // Essa variável "menu" vai ser usada pra adicionar/remover a classe
    // que controla se o menu aparece ou não na tela.
    const menu = document.getElementById("menuLateral");
    
    // Aqui dizemos: "no botaoAbrir, fique escutando o evento de clique".
// addEventListener = "adicione um escutador de evento"
// "click" = o tipo de evento que queremos escutar (clique do mouse)
// function() { ... } = o bloco de código que só roda QUANDO o clique acontecer
botaoAbrir.addEventListener("click", function() {

    // classList = a lista de classes CSS que o elemento "menu" tem no momento
    // .add("aberto") = adiciona a classe "aberto" nessa lista
    // Ou seja: quando clicarem no botaoAbrir, o menu ganha a classe "aberto"
    menu.classList.add("aberto");
    });

    // Quando clicarem no botaoFechar, o menu perde a classe "aberto"
    botaoFechar.addEventListener("click", function() {
      
      // .remove("aberto") = remove a classe "aberto" da lista de classes do menu
      // Ou seja: quando clicarem no botaoFechar, o menu perde a classe "aberto

      menu.classList.remove("aberto");
  
    });
