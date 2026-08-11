// Função para registrar logs no painel
const painelLog = document.getElementById('log-painel');
function registrarLog(mensagem) {
    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painelLog.appendChild(novaLinha);
}

// Evento de mouse: click
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function() {
    registrarLog("Evento de mouse: Evento 'click' disparado!");
});

// Evento de mouse: mouseenter
areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "Mouse entrou na área!";
    areaMouse.style.backgroundColor = "red";
    registrarLog("Evento de mouse: Evento 'mouseenter' disparado!");  
});

// Evento de mouse: mouseleave
areaMouse.addEventListener('mouseleave', function(){
areaMouse.textContent="Mouse saiu da área";
areaMouse.style.backgroundColor="green";
    registrarLog("Evento de mouse: Evento 'mouseleave' disparado!");
});


// Evento de teclado: keydown

const campoTeclado= document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento){
    registrarLog("[TECLA PRESSIONADA] Teclado Evento de mouse: Evento 'keydown' disparado!");
});




// Evento de teclado: keyup
campoTeclado.addEventListener('keyup', function(evento){
    registrarLog("[TECLA LIBERADA]Evento de mouse: Evento 'keyup' disparado!");
});

// Evento de formulário: Input 

const meuFormulario=document.getElementById('meu-formulario');
const campoInput=document.getElementById('campo-input')

campoInput.addEventListener( 'input', function(evento) {

registrarLog(`[INPUT] Formulário: Evento 'input' disparado! -> Valor atual: "${campoInput.value}"`);

});

// Envio de formulário:submit
  
// meuFormulario.addEventListener('submit' , function(evento){
//  evento.preventDefault(); 
// registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");

// });


// Isso vai funcionar, mas vai capturar apenas por click do botão envio, não envio do formulário em si.
// Para captuar o envio do formulario, e melhor usar o evento submit no próprio formulário

 const campoEnvio=document.getElementById('campo-envio');
campoEnvio.addEventListener('click' , function(evento){
 evento.preventDefault(); 
registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");

});



// Eventos de janela 


