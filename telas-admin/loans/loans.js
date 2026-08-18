const busca = document.querySelector(".pesquisa input");
const filtro = document.getElementById("filtroStatus");

const linhas = document.querySelectorAll("tbody tr");

const totalPendentes = document.getElementById("totalPendentes");
const totalAtrasados = document.getElementById("totalAtrasados");
const totalDevolvidos = document.getElementById("totalDevolvidos");
const totalGeral = document.getElementById("totalGeral");


/* Define o status inicial de cada linha */

function definirStatusInicial() {

    linhas.forEach(linha => {

        const badge = linha.querySelector(".status");
        const select = linha.querySelector(".acaoStatus");

        if (badge.classList.contains("pendente")) {
            select.value = "pendente";
        }

        else if (badge.classList.contains("atrasado")) {
            select.value = "atrasado";
        }

        else if (badge.classList.contains("devolvido")) {
            select.value = "devolvido";
        }

    });

}


/* Atualiza os cards */

function atualizarCards() {

    let pendentes = 0;
    let atrasados = 0;
    let devolvidos = 0;

    linhas.forEach(linha => {

        const status = linha.querySelector(".acaoStatus").value;

        if (status === "pendente") {
            pendentes++;
        }

        if (status === "atrasado") {
            atrasados++;
        }

        if (status === "devolvido") {
            devolvidos++;
        }

    });

    totalPendentes.textContent = pendentes;
    totalAtrasados.textContent = atrasados;
    totalDevolvidos.textContent = devolvidos;
    totalGeral.textContent = linhas.length;
}


/* Filtra a tabela */

function filtrarTabela() {

    const texto = busca.value.toLowerCase();
    const statusFiltro = filtro.value;

    linhas.forEach(linha => {

        const locatario =
            linha.cells[0].textContent.toLowerCase();

        const livro =
            linha.cells[1].textContent.toLowerCase();

        const status =
            linha.querySelector(".acaoStatus").value;

        const encontrouTexto =
            locatario.includes(texto) ||
            livro.includes(texto);

        const encontrouStatus =
            statusFiltro === "todos" ||
            status === statusFiltro;

        if (encontrouTexto && encontrouStatus) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }

    });

}


/* Altera o status */

document.querySelectorAll(".acaoStatus").forEach(select => {

    select.addEventListener("change", () => {

        const linha = select.closest("tr");
        const badge = linha.querySelector(".status");

        if (select.value === "pendente") {

            badge.textContent = "Pendente";
            badge.className = "status pendente";

        }

        if (select.value === "devolvido") {

            badge.textContent = "Devolvido";
            badge.className = "status devolvido";

        }

        if (select.value === "atrasado") {

            badge.textContent = "Devolvido C/A";
            badge.className = "status atrasado";

        }

        atualizarCards();
        filtrarTabela();

    });

});


/* Eventos */
busca.addEventListener("input", filtrarTabela);
filtro.addEventListener("change", filtrarTabela);


/* Inicialização */
definirStatusInicial();
atualizarCards();