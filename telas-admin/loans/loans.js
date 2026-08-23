const busca = document.querySelector(".pesquisa input");
const filtro = document.getElementById("filtroStatus");

const tbody = document.querySelector("tbody");

const totalPendentes = document.getElementById("totalPendentes");
const totalAtrasados = document.getElementById("totalAtrasados");
const totalDevolvidos = document.getElementById("totalDevolvidos");
const totalGeral = document.getElementById("totalGeral");


/* Modal Novo aluguel */

const btnNovoAluguel = document.getElementById("btnNovoAluguel");
const modalNovoAluguel = document.getElementById("modalNovoAluguel");
const formNovoAluguel = document.getElementById("formNovoAluguel");

const locatarioAluguel = document.getElementById("locatarioAluguel");
const livroAluguel = document.getElementById("livroAluguel");
const dataAluguel = document.getElementById("dataAluguel");
const dataDevolucao = document.getElementById("dataDevolucao");
const observacoesAluguel = document.getElementById("observacoesAluguel");

const fecharModalNovoAluguel =
    document.getElementById("fecharModalNovoAluguel");

const cancelarNovoAluguel =
    document.getElementById("cancelarNovoAluguel");


/* Livros disponíveis para empréstimo */

const livros = [
    "Dom Casmurro",
    "O Alquimista",
    "1984"
];


/* Retorna as linhas atuais da tabela */

function obterLinhas() {
    return document.querySelectorAll("tbody tr");
}


/* Define o status inicial de cada linha */

function definirStatusInicial() {

    const linhas = obterLinhas();

    linhas.forEach(linha => {

        const badge = linha.querySelector(".status");
        const select = linha.querySelector(".acaoStatus");

        if (!badge || !select) {
            return;
        }

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

    const linhas = obterLinhas();

    let pendentes = 0;
    let atrasados = 0;
    let devolvidos = 0;

    linhas.forEach(linha => {

        const select = linha.querySelector(".acaoStatus");

        if (!select) {
            return;
        }

        const status = select.value;

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

    const linhas = obterLinhas();

    const texto = busca.value.toLowerCase();
    const statusFiltro = filtro.value;

    linhas.forEach(linha => {

        const locatario =
            linha.cells[0].textContent.toLowerCase();

        const livro =
            linha.cells[1].textContent.toLowerCase();

        const select = linha.querySelector(".acaoStatus");

        const status = select.value;

        const encontrouTexto =
            locatario.includes(texto) ||
            livro.includes(texto);

        const encontrouStatus =
            statusFiltro === "todos" ||
            status === statusFiltro;

        if (encontrouTexto && encontrouStatus) {
            linha.style.display = "";
        }

        else {
            linha.style.display = "none";
        }

    });
}


/* Altera o status */

tbody.addEventListener("change", function(event) {

    if (!event.target.classList.contains("acaoStatus")) {
        return;
    }

    const select = event.target;
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

    atualizarLivrosDisponiveis();

});


/* Atualiza os livros que podem ser alugados */

function atualizarLivrosDisponiveis() {

    livroAluguel.innerHTML = `
        <option value="">
            Selecione o livro
        </option>
    `;

    const linhas = obterLinhas();

    livros.forEach(livro => {

        let livroAlugado = false;

        linhas.forEach(linha => {

            const nomeLivro =
                linha.cells[1].textContent.trim();

            const status =
                linha.querySelector(".acaoStatus").value;

            if (
                nomeLivro === livro &&
                status !== "devolvido"
            ) {
                livroAlugado = true;
            }

        });

        if (!livroAlugado) {

            const option = document.createElement("option");

            option.value = livro;
            option.textContent = livro;

            livroAluguel.appendChild(option);
        }

    });
}


/* Abre o modal */
btnNovoAluguel.addEventListener("click", function() {
    formNovoAluguel.reset();
    atualizarLivrosDisponiveis();
    modalNovoAluguel.classList.add("aberto");

});

/* Salva um novo aluguel */
formNovoAluguel.addEventListener("submit", function(event) {

    event.preventDefault();

    const locatario =
        locatarioAluguel.value.trim();

    const livro =
        livroAluguel.value;

    const dataInicio =
        dataAluguel.value;

    const dataFim =
        dataDevolucao.value;

    const observacoes =
        observacoesAluguel.value.trim();


    if (
        locatario === "" ||
        livro === "" ||
        dataInicio === "" ||
        dataFim === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");

        return;
    }


    const partesInicio = dataInicio.split("-");
    const partesFim = dataFim.split("-");

    const dataFormatadaInicio =
        `${partesInicio[2]}/${partesInicio[1]}`;

    const dataFormatadaFim =
        `${partesFim[2]}/${partesFim[1]}`;

    const novaLinha = document.createElement("tr");


    novaLinha.innerHTML = `

        <td>${locatario}</td>
        <td>${livro}</td>
        <td>${dataFormatadaInicio}</td>
        <td>${dataFormatadaFim}</td>

        <td>
            <span class="status pendente">
                Pendente
            </span>
        </td>

        <td>
            <select class="acaoStatus">
                <option value="pendente" selected>
                    Pendente
                </option>

                <option value="devolvido">
                    Devolvido
                </option>

                <option value="atrasado">
                    Devolvido C/A
                </option>
            </select>
        </td>

    `;

    tbody.appendChild(novaLinha);

    /* Observações ficam armazenadas no elemento */
    novaLinha.dataset.observacoes = observacoes;

    modalNovoAluguel.classList.remove("aberto");

    formNovoAluguel.reset();
    atualizarCards();
    filtrarTabela();
    atualizarLivrosDisponiveis();

});


/* Fecha o modal pelo X */
fecharModalNovoAluguel.addEventListener("click", function() {
    modalNovoAluguel.classList.remove("aberto");
    formNovoAluguel.reset();

});


/* Fecha o modal pelo botão Cancelar */
cancelarNovoAluguel.addEventListener("click", function() {
    modalNovoAluguel.classList.remove("aberto");
    formNovoAluguel.reset();

});

/* Eventos de busca e filtro */
busca.addEventListener("input", filtrarTabela);
filtro.addEventListener("change", filtrarTabela);

/* Inicialização */
definirStatusInicial();
atualizarCards();
atualizarLivrosDisponiveis();