const emprestimosRecentes = [
    {
        livro: "Dom Casmurro",
        locatario: "Anna Silva",
        devolucao: "16/07",
        status: "atrasado"
    },

    {
        livro: "O Alquimista",
        locatario: "Fulano S.",
        devolucao: "16/07",
        status: "devolvido"
    },

    {
        livro: "O Alquimista",
        locatario: "Ciclano",
        devolucao: "16/07",
        status: "pendente"
    }
];


const listaEmprestimos = document.getElementById("emprestimosRecentes");
const livrosPendentes = document.getElementById("livrosPendentes");

function nomeStatus(status) {

    if (status === "pendente") {
        return "Pendente";
    }

    if (status === "devolvido") {
        return "Devolvido";
    }

    if (status === "atrasado") {
        return "Devolvido C/A";
    }

    return status;
}


function mostrarEmprestimosRecentes() {

    listaEmprestimos.innerHTML = "";

    emprestimosRecentes.forEach(emprestimo => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${emprestimo.livro}</td>

            <td>${emprestimo.locatario}</td>

            <td>${emprestimo.devolucao}</td>

            <td>
                <span class="statusDashboard ${emprestimo.status}">
                    ${nomeStatus(emprestimo.status)}
                </span>
            </td>
        `;

        listaEmprestimos.appendChild(linha);
    });
}


mostrarEmprestimosRecentes();