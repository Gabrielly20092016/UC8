// Gravador de voz

const playerAudio = document.getElementById("player-audio");
const statusGravacao = document.getElementById("status-gravacao");
const btnGravador = document.getElementById("btn-gravador");

let gravador;
let partesAudio = [];
let stream;

// Pressionar o botão
btnGravador.addEventListener("pointerdown", iniciarGravacao);

// Soltar o botão
btnGravador.addEventListener("pointerup", pararGravacao);

// Caso o dedo/mouse saia do botão
btnGravador.addEventListener("pointerleave", pararGravacao);


// Começar gravação
async function iniciarGravacao() {

    try {

        // Pedir acesso ao microfone
        stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        // Criar gravador
        gravador = new MediaRecorder(stream);

        // Limpar gravação anterior
        partesAudio = [];

        // Receber partes do áudio
        gravador.addEventListener("dataavailable", function(evento) {

            if (evento.data.size > 0) {
                partesAudio.push(evento.data);
            }

        });

        // Quando parar
        gravador.addEventListener("stop", function() {

            // Criar arquivo de áudio
            const audioCompleto = new Blob(partesAudio, {
                type: gravador.mimeType
            });

            // Criar endereço temporário
            const enderecoAudio = URL.createObjectURL(audioCompleto);

            // Colocar no player
            playerAudio.src = enderecoAudio;

            // Mostrar player
            playerAudio.style.display = "block";

            // Alterar status
            statusGravacao.textContent =
                "Status: Gravação concluída!";

            // Desligar microfone
            stream.getTracks().forEach(function(track) {
                track.stop();
            });

        });

        // Começar gravação
        gravador.start();

        // Alterar botão
        btnGravador.textContent =
            "🔴 Gravando... Não solte!";

        btnGravador.style.backgroundColor =
            "#e74c3c";

        // Alterar status
        statusGravacao.textContent =
            "Status: Capturando áudio...";

    } catch (erro) {

        console.error(erro);

        statusGravacao.textContent =
            "Status: Não foi possível acessar o microfone.";

    }
}


// Parar gravação
function pararGravacao() {

    if (gravador && gravador.state === "recording") {

        gravador.stop();

        btnGravador.textContent =
            "🎤 Clique e Segure para Gravar";

        btnGravador.style.backgroundColor =
            "#3498db";
    }
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwabuilder-sw.js')
               .then(() => {
                      console.log('Service Worker registrado com sucesso!');
               })
               .catch(error => {
                      console.error('Erro ao registrar o Service Worker:', error);
               });
    });
}
