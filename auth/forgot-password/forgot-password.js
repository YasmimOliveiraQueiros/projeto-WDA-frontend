const form = document.getElementById("formRecuperar");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (email === "" || cpf === "") {
        mensagemErro.textContent = "Todos os campos são obrigatórios.";
        mensagemErro.style.visibility = "visible";
        return;
    }

    window.location.href = "../reset-password/reset-password.html";
});

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

