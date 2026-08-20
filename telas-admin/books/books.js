const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        editora: "Companhia das Letras",
        status: "alugado",
        vinculo: true
    },
    {
        id: 2,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        editora: "Rocco",
        status: "disponivel",
        vinculo: false
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        editora: "Record",
        status: "alugado",
        vinculo: true
    }
];

const listaLivros = document.getElementById("listaLivros");
const totalDisponiveis = document.getElementById("totalDisponiveis");
const totalAlugados = document.getElementById("totalAlugados");
const totalLivros = document.getElementById("totalLivros");
const campoBusca = document.getElementById("campoBusca");
const filtroStatus = document.getElementById("filtroStatus");
const modalLivro = document.getElementById("modalLivro");
const formLivro = document.getElementById("formLivro");
const tituloLivro = document.getElementById("tituloLivro");
const autorLivro = document.getElementById("autorLivro");
const editoraLivro = document.getElementById("editoraLivro");
const statusLivroModal = document.getElementById("statusLivroModal");
const fecharModalLivro = document.getElementById("fecharModalLivro");
const cancelarLivro = document.getElementById("cancelarLivro");

let livroEditando = null;


function mostrarLivros(lista) {
    listaLivros.innerHTML = "";

    lista.forEach(livro => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.editora}</td>
            <td>
                <div class="statusAcao">
                    <span class="status ${livro.status}">
                        ${livro.status === "disponivel" ? "Disponível" : "Alugado"}
                    </span>
                    <select class="statusLivro" data-id="${livro.id}">
                        <option value="disponivel" ${livro.status === "disponivel" ? "selected" : ""}>Disponível</option>
                        <option value="alugado" ${livro.status === "alugado" ? "selected" : ""}>Alugado</option>
                    </select>
                </div>
            </td>
            <td>
                <div class="acao">
                    <button class="btnEditar" onclick="editarLivro(${livro.id})">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btnExcluir" onclick="excluirLivro(${livro.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        listaLivros.appendChild(linha);
    });
}


function atualizarCards() {
    let disponiveis = 0;
    let alugados = 0;

    livros.forEach(livro => {
        if (livro.status === "disponivel") disponiveis++;
        if (livro.status === "alugado") alugados++;
    });

    totalDisponiveis.textContent = disponiveis;
    totalAlugados.textContent = alugados;
    totalLivros.textContent = livros.length;
}


function filtrarLivros() {
    const texto = campoBusca.value.toLowerCase();
    const status = filtroStatus.value;

    const resultado = livros.filter(livro => {
        const encontrouTexto =
            livro.titulo.toLowerCase().includes(texto) ||
            livro.autor.toLowerCase().includes(texto);

        const encontrouStatus =
            status === "todos" || livro.status === status;

        return encontrouTexto && encontrouStatus;
    });

    mostrarLivros(resultado);
}


function alterarStatus(id, novoStatus) {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) return;

    livro.status = novoStatus;
    atualizarCards();
    filtrarLivros();
}


function editarLivro(id) {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) return;

    livroEditando = livro;
    tituloLivro.value = livro.titulo;
    autorLivro.value = livro.autor;
    editoraLivro.value = livro.editora;
    statusLivroModal.value = livro.status;

    modalLivro.classList.add("aberto");
}


formLivro.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!livroEditando) return;

    livroEditando.titulo = tituloLivro.value;
    livroEditando.autor = autorLivro.value;
    livroEditando.editora = editoraLivro.value;
    livroEditando.status = statusLivroModal.value;

    modalLivro.classList.remove("aberto");
    livroEditando = null;

    atualizarCards();
    filtrarLivros();

    // mensagem de confirmação ao salvar
    alert("Livro atualizado com sucesso!");
});


fecharModalLivro.addEventListener("click", function() {
    modalLivro.classList.remove("aberto");
    livroEditando = null;
});

cancelarLivro.addEventListener("click", function() {
    modalLivro.classList.remove("aberto");
    livroEditando = null;
});


function excluirLivro(id) {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) return;

    // verifica vínculo antes de excluir
    if (livro.vinculo) {
        alert("Este livro não pode ser excluído pois possui vínculo com uma editora ou leitor.");
        return;
    }

    const confirmar = confirm("Deseja excluir este livro?");
    if (!confirmar) return;

    const indice = livros.findIndex(livro => livro.id === id);
    livros.splice(indice, 1);

    atualizarCards();
    filtrarLivros();
}


document.addEventListener("change", function(event) {
    if (event.target.classList.contains("statusLivro")) {
        const id = Number(event.target.dataset.id);
        const novoStatus = event.target.value;
        alterarStatus(id, novoStatus);
    }
});


campoBusca.addEventListener("input", filtrarLivros);
filtroStatus.addEventListener("change", filtrarLivros);

atualizarCards();
mostrarLivros(livros);