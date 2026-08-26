const apiUrl = 'https://api.disneyapi.dev/character';

let paginaAtual = 1;
let limite = 50;

const container = document.getElementById('personagens');
const botaoCarregar = document.getElementById('carregarMais');
const mensagem = document.getElementById('contador');
const pagina = document.getElementById('pagina');


// FUNÇÃO PARA CARREGAR OS PERSONAGENS
function carregarPersonagens() {

    botaoCarregar.disabled = true;
    mensagem.textContent = 'Carregando personagens...';

    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limite}`;

    fetch(url)

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (resultado) {

            console.log(resultado);


            // Pega os personagens da API
            resultado.data.forEach(function (personagem) {

                const card = criarCard(personagem);

                container.appendChild(card);
            });
            

            mensagem.textContent =
                `${container.children.length} personagens carregados`;

            pagina.textContent = `Página ${paginaAtual}`;

            paginaAtual++;

            // Verifica se existe mais páginas
            botaoCarregar.disabled = false;

            if (!resultado.info.nextPage) {
                botaoCarregar.style.display = 'none';
            }

        })

}


// FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM
function criarCard(personagem) {

    const card = document.createElement('div');

    // Classe para editar no CSS
    card.classList.add('card');

    // Verifica se o personagem possui uma imagem
    let imagem = personagem.imageUrl;

    // Cria o conteúdo do card

    card.innerHTML = `
        <img 
            src="${imagem || ''}" 
            alt="${personagem.name}"
            onerror="this.style.display='none';"
        >

        <h2>${personagem.name}</h2>
    `;

    return card;
}


// EVENTO DO BOTÃO "CARREGAR MAIS"
botaoCarregar.addEventListener('click', function () {

    carregarPersonagens();

});


// CARREGA A PRIMEIRA PÁGINA QUANDO O SITE É ABERTO
carregarPersonagens();