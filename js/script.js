
// Gravador de voz

const statusGravacao=document.getElementById('status-gravacao');
const btnGravador=document.getElementById('btn-gravador');



//  Primeiro evento de mouse mudar a cor para vermelho e mudar o status

btnGravador.addEventListener('touchstart' , function(){
btnGravador.textContent="🔴 Gravando...Não solte!";
btnGravador.style.backgroundColor="#e74c3c";
statusGravacao.textContent=" Status: Capturando áudio...";
});



// Segundo evento de mouse mudar para a cor original e mudar o status
btnGravador.addEventListener( 'touchend', function() {
    btnGravador.textContent="🎤 Clique e Segure para Gravar "
    btnGravador.style.backgroundColor="#3498db";
    statusGravacao.textContent=" Status: Gravação concluída e enviada!";




});
