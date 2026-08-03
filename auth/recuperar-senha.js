const form = document.getElementById("formRecuperar");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        mensagemErro.textContent = "Email ou senha não podem estar vazios.";
        mensagemErro.style.visibility = "visible";
        return;
    }

    window.location.href = "redefinir-senha.html";
});

document.getElementById("email").addEventListener("input", function() {
    mensagemErro.style.visibility = "hidden";
    mensagemErro.textContent = "";
});

document.getElementById("senha").addEventListener("input", function() {
    mensagemErro.style.visibility = "hidden";
    mensagemErro.textContent = "";
});
