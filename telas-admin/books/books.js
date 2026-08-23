const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        editora: "Companhia das Letras",
        status: "alugado",
        vinculo: true,
        observacao: ""
    },

    {
        id: 2,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        editora: "Rocco",
        status: "disponivel",
        vinculo: false,
        observacao: ""
    },

    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        editora: "Record",
        status: "alugado",
        vinculo: true,
        observacao: ""
    }
];



/* Elementos da página */
const listaLivros = document.getElementById("listaLivros");
const totalDisponiveis = document.getElementById("totalDisponiveis");
const totalAlugados = document.getElementById("totalAlugados");
const totalLivros = document.getElementById("totalLivros");
const campoBusca = document.getElementById("campoBusca");
const filtroStatus = document.getElementById("filtroStatus");


/* Modal de editar */
const modalLivro = document.getElementById("modalLivro");
const formLivro = document.getElementById("formLivro");
const tituloLivro = document.getElementById("tituloLivro");
const autorLivro = document.getElementById("autorLivro");
const editoraLivro = document.getElementById("editoraLivro");
const statusLivroModal = document.getElementById("statusLivroModal");
const fecharModalLivro = document.getElementById("fecharModalLivro");
const cancelarLivro = document.getElementById("cancelarLivro");

let livroEditando = null;


/* Modal de novo livro */
const btnNovoLivro = document.getElementById("btnNovoLivro");
const modalNovoLivro = document.getElementById("modalNovoLivro");
const formNovoLivro = document.getElementById("formNovoLivro");
const novoTituloLivro = document.getElementById("novoTituloLivro");
const novoAutorLivro = document.getElementById("novoAutorLivro");
const novaEditoraLivro = document.getElementById("novaEditoraLivro");
const novoStatusLivro = document.getElementById("novoStatusLivro");

const fecharModalNovoLivro =
    document.getElementById("fecharModalNovoLivro");
const cancelarNovoLivro =
    document.getElementById("cancelarNovoLivro");


/* Mostra os livros na tabela */
function mostrarLivros(lista) {
    listaLivros.innerHTML = "";

    lista.forEach(livro => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${livro.titulo}</td>

            <td>${livro.autor}</td>

            <td>${livro.editora}</td>

            <td>
                <span class="status ${livro.status}">
                    ${livro.status === "disponivel"
                        ? "Disponível"
                        : "Alugado"}
                </span>
            </td>

            <td>
                <div class="acao">
                    <button
                        class="btnEditar"
                        data-id="${livro.id}"
                        onclick="editarLivro(${livro.id})">
                        <img src="../../../assets/icons/edit.svg" alt="Editar" class="icon-acao">
                    </button>

                    <button
                        class="btnExcluir"
                        data-id="${livro.id}"
                        onclick="excluirLivro(${livro.id})">
                        <img src="../../../assets/icons/delete.svg" alt="Excluir" class="icon-acao">
                    </button>
                </div>
            </td>
        `;

        listaLivros.appendChild(linha);
    });
}

/* Atualiza os cards */
function atualizarCards() {
    let disponiveis = 0;
    let alugados = 0;

    livros.forEach(livro => {
        if (livro.status === "disponivel") {
            disponiveis++;
        }

        if (livro.status === "alugado") {
            alugados++;
        }
    });

    totalDisponiveis.textContent = disponiveis;
    totalAlugados.textContent = alugados;
    totalLivros.textContent = livros.length;
}

/* Busca e filtro */
function filtrarLivros() {
    const texto = campoBusca.value.toLowerCase();
    const status = filtroStatus.value;
    const resultado = livros.filter(livro => {

        const encontrouTexto =
            livro.titulo.toLowerCase().includes(texto) ||
            livro.autor.toLowerCase().includes(texto);

        const encontrouStatus =
            status === "todos" ||
            livro.status === status;
        return encontrouTexto && encontrouStatus;
    });
    mostrarLivros(resultado);
}


/* Alterar status */
function alterarStatus(id, novoStatus) {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) {
        return;
    }

    livro.status = novoStatus;
    atualizarCards();
    filtrarLivros();
}

/* Editar livro */
function editarLivro(id) {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) {
        return;
    }

    livroEditando = livro;
    tituloLivro.value = livro.titulo;
    autorLivro.value = livro.autor;
    editoraLivro.value = livro.editora;
    statusLivroModal.value = livro.status;
    modalLivro.classList.add("aberto");
    observacaoLivro.value = livro.observacao;
    livroEditando.observacao = observacaoLivro.value.trim();
    novaObservacaoLivro.value = "";
}


/* Salvar edição */
formLivro.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!livroEditando) {
        return;
    }

    livroEditando.titulo = tituloLivro.value;
    livroEditando.autor = autorLivro.value;
    livroEditando.editora = editoraLivro.value;
    livroEditando.status = statusLivroModal.value;

    modalLivro.classList.remove("aberto");
    livroEditando = null;
    atualizarCards();
    filtrarLivros();
    alert("Livro atualizado com sucesso!");
});


/* Fechar modal de edição */
fecharModalLivro.addEventListener("click", function () {
    modalLivro.classList.remove("aberto");
    livroEditando = null;
});


cancelarLivro.addEventListener("click", function () {
    modalLivro.classList.remove("aberto");
    livroEditando = null;
});


/* Excluir livro */
function excluirLivro(id) {

    const livro = livros.find(function (livro) {
        return livro.id === Number(id);
    });

    if (!livro) {
        return;
    }

    if (livro.vinculo) {
        alert("Este livro não pode ser excluído pois possui vínculo com uma editora ou leitor.");
        return;
    }

    const confirmar = confirm("Deseja excluir este livro?");

    if (!confirmar) {
        return;
    }

    const indice = livros.findIndex(function (livro) {
        return livro.id === Number(id);
    });

    livros.splice(indice, 1);

    atualizarCards();
    filtrarLivros();
}


/* Abrir modal de novo livro */
btnNovoLivro.addEventListener("click", function () {
    formNovoLivro.reset();
    novoStatusLivro.value = "disponivel";
    modalNovoLivro.classList.add("aberto");
});


/* Salvar novo livro */
formNovoLivro.addEventListener("submit", function (event) {
    event.preventDefault();
    const novoLivro = {
        id: Date.now(),
        titulo: novoTituloLivro.value.trim(),
        autor: novoAutorLivro.value.trim(),
        editora: novaEditoraLivro.value.trim(),
        status: novoStatusLivro.value,
        vinculo: false
    };

    if (
        novoLivro.titulo === "" ||
        novoLivro.autor === "" ||
        novoLivro.editora === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    livros.push(novoLivro);
    modalNovoLivro.classList.remove("aberto");
    formNovoLivro.reset();
    atualizarCards();
    filtrarLivros();
    alert("Livro cadastrado com sucesso!");
});

/* Fechar modal de novo livro */
fecharModalNovoLivro.addEventListener("click", function () {
    modalNovoLivro.classList.remove("aberto");
    formNovoLivro.reset();
});

cancelarNovoLivro.addEventListener("click", function () {
    modalNovoLivro.classList.remove("aberto");
    formNovoLivro.reset();
});


/* Alteração do status pela tabela */
document.addEventListener("change", function (event) {
    if (event.target.classList.contains("statusLivro")) {
        const id = Number(event.target.dataset.id);
        const novoStatus = event.target.value;
        alterarStatus(id, novoStatus);
    }

});


/* Eventos de busca e filtro */
campoBusca.addEventListener("input", filtrarLivros);
filtroStatus.addEventListener("change", filtrarLivros);


/* Inicialização */
atualizarCards();
mostrarLivros(livros);

const novaObservacaoLivro =
    document.getElementById("novaObservacaoLivro");

const observacaoLivro =
    document.getElementById("observacaoLivro");

const novoLivro = {
    id: Date.now(),
    titulo: novoTituloLivro.value.trim(),
    autor: novoAutorLivro.value.trim(),
    editora: novaEditoraLivro.value.trim(),
    status: novoStatusLivro.value,
    vinculo: false,
    observacao: novaObservacaoLivro.value.trim()
};