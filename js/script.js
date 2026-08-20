const apiUrl = 'https://api.disneyapi.dev/character'; // ENDPOINT DA API

let paginaAtual = 1;
let limite = 50;

const container = document.getElementById('personagens');
const botaoCarregar = document.getElementById('carregarMais');
const mensagem = document.getElementById('contador');
const pagina = document.getElementById('pagina');


/* FUNÇÃO PARA CARREGAR OS PERSONAGENS */
function carregarPersonagens() {

    botaoCarregar.disabled = true; // Desabilita o botão enquanto a API responde
    mensagem.textContent = 'Carregando personagens...';

    // Monta a URL da API com a página atual e o limite de 50 personagens
    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limite}`;


    // O FETCH() FAZ UMA REQUISIÇÃO HTTP PARA A API
    fetch(url)

        // Converte a resposta recebida para JSON
        .then(function (resposta) {
            return resposta.json();
        })


        // Recebe os dados da API em formato de objeto JSON
        .then(function (resultado) {

            // Mostra no console os dados recebidos da API
            console.log(resultado);


            // Percorre cada personagem recebido pela API
            resultado.data.forEach(function (personagem) {

                // Cria o card do personagem
                const card = criarCard(personagem);

                // Adiciona o card na página
                container.appendChild(card);

            });


            // Atualiza a quantidade de personagens carregados
            mensagem.textContent =
                `${container.children.length} personagens carregados`;


            // Mostra qual página está sendo exibida
            pagina.textContent = `Página ${paginaAtual}`;


            // Passa para a próxima página
            paginaAtual++;


            // Libera o botão novamente
            botaoCarregar.disabled = false;


            // Verifica se existem mais páginas
            if (!resultado.info.nextPage) {

                // Se não houver, esconde o botão
                botaoCarregar.style.display = 'none';

            }

        })

        // Caso aconteça algum erro na requisição
        .catch(function (erro) {

            console.error('Erro ao carregar os personagens:', erro);

            mensagem.textContent =
                'Não foi possível carregar os personagens.';

            botaoCarregar.disabled = false;

        });
}


// FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM
function criarCard(personagem) {

    // Cria um elemento div para representar o card
    const card = document.createElement('div');

    // Adiciona a classe CSS "card"
    card.classList.add('card');


    // Verifica se o personagem possui uma imagem
    const imagem = personagem.imageUrl
        ? personagem.imageUrl
        : 'img/sem-imagem.png';


    // Monta o conteúdo do card
    card.innerHTML = `
        <img src="${imagem}" alt="${personagem.name}">
        <h2>${personagem.name}</h2>
    `;


    // Retorna o card pronto
    return card;
}


// EVENTO DE CLIQUE NO BOTÃO PARA CARREGAR MAIS PERSONAGENS

botaoCarregar.addEventListener('click', function () {

    // Carrega a próxima página de personagens
    carregarPersonagens();

});


// CARREGA A PRIMEIRA PÁGINA QUANDO O SITE É ABERTO

carregarPersonagens();