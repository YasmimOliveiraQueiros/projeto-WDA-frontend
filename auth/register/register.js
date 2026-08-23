function configurarOlho(idInput, idIcone) {

    const input = document.getElementById(idInput);
    const icone = document.getElementById(idIcone);

    if (!input || !icone) {
        return;
    }

    icone.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";
            this.src = "../../assets/icons/eye.svg";

        } else {

            input.type = "password";
            this.src = "../../assets/icons/eye-slash.svg";

        }

    });
}


configurarOlho("senha", "toggleSenha");
configurarOlho('confirmarSenha', 'toggleConfirmarSenha');

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

    window.location.href = "../login/login.html";
});

function limparMensagem() {
    mensagemErro.textContent = "";
    mensagemErro.style.visibility = "hidden";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", limparMensagem);
});

const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");


cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "");

    if (valor.length > 3) {
        valor = valor.slice(0, 3) + "." + valor.slice(3);
    }

    if (valor.length > 7) {
        valor = valor.slice(0, 7) + "." + valor.slice(7);
    }

    if (valor.length > 11) {
        valor = valor.slice(0, 11) + "-" + valor.slice(11);
    }

    cpf.value = valor.slice(0, 14);
});

telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "");


    if (valor.length > 2) {
        valor = "(" + valor.slice(0, 2) + ") " + valor.slice(2);
    }

    if (valor.length > 9) {
        valor = valor.slice(0, 9) + "-" + valor.slice(9);
    }

    telefone.value = valor.slice(0, 15);
});