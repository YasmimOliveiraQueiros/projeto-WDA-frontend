const editoras = [
    { id: 1, nome: "Companhia das Letras", cnpj: "00.000.000/0000-00", cidade: "São Paulo - SP", exemplares: 2, email: "contato@companhia.com", vinculo: true },
    { id: 2, nome: "Record", cnpj: "00.000.000/0000-00", cidade: "Rio de Janeiro - RJ", exemplares: 8, email: "contato@record.com", vinculo: true },
    { id: 3, nome: "Rocco", cnpj: "00.000.000/0000-00", cidade: "Rio de Janeiro - RJ", exemplares: 10, email: "contato@rocco.com", vinculo: true }
];

const listaEditoras = document.getElementById("listaEditoras");
const totalEditoras = document.getElementById("totalEditoras");
const totalLivros = document.getElementById("totalLivros");
const campoBusca = document.getElementById("campoBusca");

const modalEditora = document.getElementById("modalEditora");
const formEditora = document.getElementById("formEditora");
const nomeEditora = document.getElementById("nomeEditora");
const cnpjEditora = document.getElementById("cnpjEditora");
const cidadeEditora = document.getElementById("cidadeEditora");
const exemplaresEditora = document.getElementById("exemplaresEditora");
const emailEditora = document.getElementById("emailEditora");
const fecharModalEditora = document.getElementById("fecharModalEditora");
const cancelarEditora = document.getElementById("cancelarEditora");

let editoraEditando = null;

function mostrarEditoras(lista) {
    listaEditoras.innerHTML = "";

    lista.forEach(editora => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${editora.nome}</td>
            <td>${editora.exemplares}</td>
            <td class="acoes">
                <button class="editar" onclick="editarEditora(${editora.id})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="excluir" onclick="excluirEditora(${editora.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;

        listaEditoras.appendChild(linha);
    });
}

function atualizarCards() {
    totalEditoras.textContent = editoras.length;

    const totalVinculados = editoras.reduce((acc, editora) => acc + editora.exemplares, 0);
    totalLivros.textContent = totalVinculados;
}

function filtrarEditoras() {
    const texto = campoBusca.value.toLowerCase();

    const resultado = editoras.filter(editora =>
        editora.nome.toLowerCase().includes(texto)
    );

    mostrarEditoras(resultado);
}

function editarEditora(id) {
    const editora = editoras.find(e => e.id === id);
    if (!editora) return;

    editoraEditando = editora;
    nomeEditora.value = editora.nome;
    cnpjEditora.value = editora.cnpj;
    cidadeEditora.value = editora.cidade;
    exemplaresEditora.value = editora.exemplares;
    emailEditora.value = editora.email;

    modalEditora.classList.add("aberto");
}

formEditora.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!editoraEditando) return;

    editoraEditando.nome = nomeEditora.value;
    editoraEditando.cnpj = cnpjEditora.value;
    editoraEditando.cidade = cidadeEditora.value;
    editoraEditando.exemplares = Number(exemplaresEditora.value);
    editoraEditando.email = emailEditora.value;

    modalEditora.classList.remove("aberto");
    editoraEditando = null;

    atualizarCards();
    filtrarEditoras();

    alert("Editora atualizada com sucesso!");
});

fecharModalEditora.addEventListener("click", function() {
    modalEditora.classList.remove("aberto");
    editoraEditando = null;
});

cancelarEditora.addEventListener("click", function() {
    modalEditora.classList.remove("aberto");
    editoraEditando = null;
});

function excluirEditora(id) {
    const editora = editoras.find(e => e.id === id);
    if (!editora) return;

    if (editora.vinculo) {
        alert("Esta editora não pode ser excluída pois possui livros vinculados.");
        return;
    }

    const confirmar = confirm("Deseja excluir esta editora?");
    if (!confirmar) return;

    const indice = editoras.findIndex(e => e.id === id);
    editoras.splice(indice, 1);

    atualizarCards();
    filtrarEditoras();
}

campoBusca.addEventListener("input", filtrarEditoras);

atualizarCards();
mostrarEditoras(editoras);