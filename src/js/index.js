/*
    Passo 1 - Pegar os elementos que representam as abas no HTML
    Passo 2 - Identificar o clique no elemento da aba
    Passo 3 - Quando usuário clicar, desmarcar a aba selecionada
    Passo 4 - Marcar a aba selecionada
    Passo 5 - Esconder o conteúdo anterior
    Passo 6 - Mostrar o conteúdo da aba selecionada

*/

const abas = document.querySelectorAll(".aba");
console.log(abas);

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    
    if (aba.classList.contains("selecionada")) {
      return;
    }

    selecionarAba(aba)
    mostrarInformacoesDaAba(aba)
  });
});

function selecionarAba(aba){
  const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");
    aba.classList.add("selecionada");
}

  function mostrarInformacoesDaAba(aba){
      const informacaoSelecionada = document.querySelector(
        ".informacao.selecionado"
      );
      informacaoSelecionada.classList.remove("selecionado");

      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

      const informacaoASerMostrada = document.getElementById(
        idDoElementoDeInformacoesDaAba
      );
      informacaoASerMostrada.classList.add("selecionado");
  }