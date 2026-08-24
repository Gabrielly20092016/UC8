// Pagina cadastro 
function criarConta() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    // verifica campos vazios
    if (nome === "" || email === "" || telefone === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // valida email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido!");
        return;
    }

    // se tudo estiver certo
    salvarDados();

    alert("Cadastro realizado com sucesso!");

    window.location.href = "pagina_sos.index.html";
}


// PAGINA SOS

const itens = document.querySelectorAll(".item-menu");

if (itens.length > 0) {
    itens.forEach(item => {
        item.addEventListener("click", () => {
            itens.forEach(i => i.classList.remove("ativo"));
            item.classList.add("ativo");
        });
    });
}


function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";

    // volta para o estado inicial do modal
    document.getElementById("confirmacao").style.display = "block";
    document.getElementById("mensagem").style.display = "none";
}

function enviarAlerta() {
    document.getElementById("confirmacao").style.display = "none";
    document.getElementById("mensagem").style.display = "block";

    // aqui entra a opção OK depois do envio
    setTimeout(() => {
        const ok = document.createElement("button");
        ok.innerText = "OK";
        ok.className = "ok-btn";

        ok.onclick = () => {
            fecharModal(); // fecha tudo ao clicar em OK
            ok.remove();   // remove botão depois de usar
        };

        document.querySelector(".janela").appendChild(ok);
    }, 300);
}


// Pagina contatos

let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function mostrarContatos() {

    const lista = document.getElementById("listaContatos");

    if (!lista) return;

    lista.innerHTML = "";

    contatos.forEach((contato, indice) => {

        lista.innerHTML += `
            <div class="contato">

                <div class="info">
                    <h3>${contato.nome}</h3>
                    <p>${contato.numero}</p>
                </div>

                <button class="excluir" onclick="excluirContato(${indice})">
                    Excluir
                </button>

            </div>
        `;

    });

}

function adicionarContato() {

    const nome = document.getElementById("nome");
    const numero = document.getElementById("numero");

    if (!nome || !numero) return;

    if (nome.value === "" || numero.value === "") {
        alert("Preencha todos os campos!");
        return;
    }

    contatos.push({
        nome: nome.value,
        numero: numero.value
    });

    localStorage.setItem("contatos", JSON.stringify(contatos));

    nome.value = "";
    numero.value = "";

    mostrarContatos();

}

function excluirContato(indice) {

    contatos.splice(indice, 1);

    localStorage.setItem("contatos", JSON.stringify(contatos));

    mostrarContatos();

}


if (document.getElementById("listaContatos")) {
    mostrarContatos();
}

// Pagina de historico de alertas

document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".alert-card");

    if (tabs.length === 0 || cards.length === 0) return;

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));

            tab.classList.add("active");

            const filtro = tab.dataset.filter;

            cards.forEach(card => {

                if (filtro === "all" || card.dataset.status === filtro) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

});