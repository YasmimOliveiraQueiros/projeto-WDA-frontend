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

const form = document.querySelector("form");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    if (email === "" || cpf === "" || senha === "" || confirmarSenha === "") {
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

document.getElementById("email").addEventListener("input", limparMensagem);
document.getElementById("cpf").addEventListener("input", limparMensagem);
document.getElementById("senha").addEventListener("input", limparMensagem);
document.getElementById("confirmarSenha").addEventListener("input", limparMensagem);

function limparMensagem() {
    mensagemErro.textContent = "";
    mensagemErro.style.visibility = "hidden";
}

const cpf = document.getElementById("cpf");

cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;
});