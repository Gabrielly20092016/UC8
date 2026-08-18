// ====================================================================================================================================================================================
// FASE 1: Alterar o texto dentro da caixinha
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o conteúdo de um elemento HTML”. 
// --> Ao clicar no botão “Alterar texto” o texto deve ser alterado para “Olá, JavaScript! O texto foi trocado!”. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA ALTERAR O TEXTO E RESETAR O TEXTO DO BOX 1 <<<
// ====================================================================================================================================================================================

function alterarConteudo() {
  const texto =
  document.getElementById("demo1");
  texto.innerHTML = "Olá, JavaScript! O texto foi trocado!";
  // Essa função troca o texto que  estar dentro do elemento demo1
  
}


function resetarConteudo() {
  const texto =
  document.getElementById("demo1")
  texto.innerHTML = "O JavaScript pode alterar o conteúdo de um elemento HTML.";
  // Essa função  volta para o texto inicial
}



// ====================================================================================================================================================================================
// FASE 2: LIGAR E DESLIGAR LÂMPADA
// COMPORTAMENTO: 
// --> A tela inicia com a lâmpada desligada. 
// --> Ao clicar no botão “Ligar a luz” a lâmpada deve ligar.
// --> Quando clicar em “Desligar a luz” a lâmpada deve desligar.

// >>> CRIE AS FUNÇÕES PARA LIGAR E DESLIGAR A LÂMPADA DO BOX 2 <<<
// ====================================================================================================================================================================================

function ligarLampada() {
  document.getElementById("lamp-off").style.display = "none";
  document.getElementById("lamp-on").style.display = "block";
  document.getElementById("lamp-status").innerHTML = "Lâmpada ligada!"
  // isso faz ligar a lâmpada
}


function desligarLampada() {
  document.getElementById("lamp-off").style.display = "block";
  document.getElementById("lamp-on").style.display = "none";
  document.getElementById("lamp-status").innerHTML = "Lâmpada desligada!"
  // isso faz desligar a Lâmpada
}



// ====================================================================================================================================================================================
// FASE 3: Alterar os estilos do texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o estilo visual de qualquer elemento”, sem nenhum estilo aplicado.
// --> Ao clicar no botão “Aumentar fonte”, o tamanho da letra deve aumentar para 25px.
// --> Ao clicar no botão “Mudar cor”, a cor do texto deve ficar verde. Ao clicar no botão “Negrito”, o texto fica em negrito.
// --> Ao clicar no botão “Fundo”, é aplicado um fundo com transparência no texto. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA AUMENTAR TAMANHO DA FONTE, MUDAR A COR, APLICAR NEGRITO, APLICAR FUNDO E RESETAR A DEMONSTRAÇÃO DO BOX 3 <<<
// ====================================================================================================================================================================================

function aumentarFonte() {
  document.getElementById("demo3").style.fontSize = "30px"
  // Essa função aumenta a fonte para 25px
}


function mudarCor() {
  document.getElementById("demo3").style.color = "red";
  // Essa função muda a cor do texto
}


function aplicarNegrito() {
  document.getElementById("demo3").style.fontWeight = "bold";
  // Essa função deixa a fonte em negrito
}


function aplicarFundo() {
  document.getElementById("demo3").style.backgroundColor = "rgba(194, 64, 245, 0.15)";
  // Essa função muda a cor de fundo
}


function resetarDemonstracao() {
  const texto =
  document.getElementById("");
  texto.style.fontSize = "";
  texto.style.color = "";
  texto.style.fontWeight = "";
  texto.style.backgroundColor = "";
  // Essa função faz o texto voltar ao texto original
}



// ====================================================================================================================================================================================
// FASE 4: Ocultar o texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “Este parágrafo vai sumir quando você clicar no botão abaixo.”.
// --> Ao clicar no botão “Ocultar elemento”, o texto deve sumir. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA OCULTAR ELEMENTO E MOSTRAR ELEMENTO DO BOX 4 <<<
// ======================================================================================================================================================================================

function ocultarElemento() {
  document.getElementById("demo4").style.display = "none";
  // Essa função oculta o texto
}


function mostrarElemento() {
  document.getElementById("demo4").style.display = "block";
  // Essa função mostra o texto
}



// ====================================================================================================================================================================================
// FASE 5: Exibir o texto
// COMPORTAMENTO: 
// --> A tela inicia com um texto oculto. 
// --> Ao clicar no botão “Revelar elemento”, o texto deve aparecer. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA MOSTRAR TEXTO E OCULTAR TEXTO DO BOX 5 <<<
// ====================================================================================================================================================================================

function exibirTexto() {
  document.getElementById("hidden-text").style.display = "block";
  // escreva a sua solução aqui
}


function esconderTexto() {
  document.getElementById("hidden-text").style.display = "none";
  //  escreva a sua solução aqui
}



// ====================================================================================================================================================================================
// FASE 6: Iniciar a aplicação
// COMPORTAMENTO:
// --> O index.html será executado 
// --> Em seguida, a linha "document.addEventListener('DOMContentLoaded', iniciarAplicacao);" vai chamar a função iniciarAplicacao()
// --> A função será executada e dentro dela terá outras chamadas de função (as que você criou ali em cima - FASE 1 a 5)
// --> Essas chamadas de função devem executar as funções que você programou na sua página

// >>> CRIE A FUNÇÃO PARA INICIAR A APLICAÇÃO, QUE SERÁ CHAMADA PELA LINHA document.addEventListener('DOMContentLoaded', iniciarAplicacao); <<<
// ====================================================================================================================================================================================

function iniciarAplicacao() {
  // --------------------------------------------------------
  // FASE 1: Configure e chame as funções que irão alterar 
  // e resetar o texto dentro da caixinha
  // --------------------------------------------------------
  

  document.getElementById("botao-alterar-texto")
  .addEventListener("click", alterarConteudo);

  document.getElementById("botao-resetar-demo1")
  .addEventListener("click", resetarConteudo);


  // --------------------------------------------------------
  // FASE 2: Configure e chame as funções que irão ligar e
  // desligar a lâmpada
  // --------------------------------------------------------

  
document.getElementById("botao-ligar")
.addEventListener("click", ligarLampada);

document.getElementById("botao-desligar")
.addEventListener("click", desligarLampada);

  // --------------------------------------------------------
  // FASE 3: Configure e chame as funções que irão alterar
  // os estilos do texto
  // --------------------------------------------------------

  
  document.getElementById("botao-aumentar-fonte")
  .addEventListener("click", aumentarFonte);

  document.getElementById("botao-mudar-cor")
  .addEventListener("click", mudarCor);

  document.getElementById("botao-negrito")
  .addEventListener("click", aplicarNegrito);

document.getElementById("botao-fundo")
.addEventListener("click", aplicarFundo);

  document.getElementById("botao-resetar-demo3")
  .addEventListener("click", resetarDemonstracao);


  // --------------------------------------------------------
  // FASE 4: Configure e chame as funções que irão ocultar e
  // mostrar o elemento
  // --------------------------------------------------------

  
  document.getElementById("botao-ocultar")
  .addEventListener("click", ocultarElemento);

  document.getElementById("botao-mostrar")
  .addEventListener("click", mostrarElemento);

  // --------------------------------------------------------
  // FASE 5: Configure e chame as funções que irão ocultar e
  // mostrar o texto
  // -------------------------------------------------------
  
  document.getElementById("botao-revelar")
  .addEventListener("click", exibirTexto);

document.getElementById("botao-esconder")
.addEventListener("click", esconderTexto);

  


}

document.addEventListener('DOMContentLoaded', iniciarAplicacao);