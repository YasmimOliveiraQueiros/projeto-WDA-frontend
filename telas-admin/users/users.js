const usuarios = [
    {
        nome: "Anna Silva",
        email: "ana.silva@email.com",
        livros: 12,
        status: "inativo"
    },
    {
        nome: "Fulano S.",
        email: "joao.souza@email.com",
        livros: 5,
        status: "ativo"
    },
    {
        nome: "Ciclano",
        email: "maria.lima@email.com",
        livros: 2,
        status: "inativo"
    }
];

const listaUsuarios = document.getElementById("listaUsuarios");
const campoBusca = document.getElementById("campoBusca");
const filtroStatus = document.getElementById("filtroStatus");

const totalAtivos = document.getElementById("totalAtivos");
const totalInativos = document.getElementById("totalInativos");
const totalUsuarios = document.getElementById("totalUsuarios");


function mostrarUsuarios(lista) {

    listaUsuarios.innerHTML = "";

    lista.forEach(function (usuario, index) {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${usuario.nome}</td>

            <td>
                <a href="mailto:${usuario.email}">
                    ${usuario.email}
                </a>
            </td>

            <td>${usuario.livros}</td>

            <td>
                <span class="status ${usuario.status}">
                    ${usuario.status === "ativo" ? "Ativo" : "Inativo"}
                </span>
            </td>

            <td>
                <button class="acao" onclick="alterarStatus(${index})">
                    ${usuario.status === "ativo" ? "Inativar" : "Ativar"}
                </button>
            </td>
        `;

        listaUsuarios.appendChild(linha);
    });
}


function atualizarCards() {

    const ativos = usuarios.filter(function (usuario) {
        return usuario.status === "ativo";
    });

    const inativos = usuarios.filter(function (usuario) {
        return usuario.status === "inativo";
    });

    totalAtivos.textContent = ativos.length;
    totalInativos.textContent = inativos.length;
    totalUsuarios.textContent = usuarios.length;
}


function filtrarUsuarios() {

    const busca = campoBusca.value.toLowerCase();
    const status = filtroStatus.value;

    const resultado = usuarios.filter(function (usuario) {

        const encontrouBusca =
            usuario.nome.toLowerCase().includes(busca) ||
            usuario.email.toLowerCase().includes(busca);

        const encontrouStatus =
            status === "todos" ||
            usuario.status === status;

        return encontrouBusca && encontrouStatus;
    });

    mostrarUsuarios(resultado);
}


function alterarStatus(index) {

    if (usuarios[index].status === "ativo") {
        usuarios[index].status = "inativo";
    } else {
        usuarios[index].status = "ativo";
    }

    filtrarUsuarios();
    atualizarCards();
}


campoBusca.addEventListener("input", filtrarUsuarios);

filtroStatus.addEventListener("change", filtrarUsuarios);


mostrarUsuarios(usuarios);
atualizarCards();