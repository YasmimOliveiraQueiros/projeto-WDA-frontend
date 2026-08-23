const alugueis = [
    {
        livro: "Dom Casmurro",
        aluguel: "08/07",
        devolucao: "22/07",
        status: "pendente"
    },

    {
        livro: "Capitães de areia",
        aluguel: "08/07",
        devolucao: "22/07",
        status: "devolvido"
    },

    {
        livro: "O Alquimista",
        aluguel: "08/07",
        devolucao: "22/07",
        status: "devolvido"
    }
];


const listaAlugueis = document.getElementById("listaAlugueis");
const totalAlugados = document.getElementById("totalAlugados");
const ultimoLivro = document.getElementById("ultimoLivro");
const livroMaisAlugado = document.getElementById("livroMaisAlugado");


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


function mostrarAlugueis() {
    listaAlugueis.innerHTML = "";

    alugueis.forEach(aluguel => {

        const linha = document.createElement("div");

        linha.classList.add("aluguelLinha");
        
        linha.innerHTML = `
            <div>
                ${aluguel.livro}
            </div>

            <div>
                ${aluguel.aluguel}
            </div>

            <div>
                ${aluguel.devolucao}
            </div>
            
            <div>
                <span class="statusTenant ${aluguel.status}">
                    ${nomeStatus(aluguel.status)}
                </span>
            </div>
        `;
        
        listaAlugueis.appendChild(linha);
    });
}


function atualizarCards() {
    totalAlugados.textContent = alugueis.length;

    if (alugueis.length > 0) {

        ultimoLivro.textContent =
            alugueis[0].livro;
    }
}


atualizarCards();
mostrarAlugueis();