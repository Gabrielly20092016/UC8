// Gravador de voz
const statusGravacao=document.getElementById('status-gravacao');
const btnGravador=document.getElementById('btn-gravador');


btnGravador.addEventListener('pointerdown', function(){
    btnGravador.textContent="🔴 Gravando...Não solte!";
    btnGravador.style.backgroundColor="#e74c3c";
    statusGravacao.textContent=" Status: Capturando áudio...";
});

btnGravador.addEventListener('pointerup', function(){
    btnGravador.textContent="🎤 Clique e Segure para Gravar "
    btnGravador.style.backgroundColor="#3498db";
    statusGravacao.textContent=" Status: Gravação concluída e enviada!"; 

});


    

