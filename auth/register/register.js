const form = document.getElementById("formCadastro");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const data = document.getElementById("data").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const casa = document.getElementById("casa").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    if (
        nome === "" ||
        data === "" ||
        cpf === "" ||
        telefone === "" ||
        casa === "" ||
        numero === "" ||
        bairro === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ) {
        mensagemErro.textContent = "Preencha todos os campos.";
        mensagemErro.style.visibility = "visible";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = "As senhas precisam ser iguais.";
        mensagemErro.style.visibility = "visible";
        return;
    }

    window.location.href = "login.html";
});

function limparMensagem() {
    mensagemErro.textContent = "";
    mensagemErro.style.visibility = "hidden";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", limparMensagem);
});