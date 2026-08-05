function configurarOlho(idInput, idIcone) {
    const input = document.getElementById(idInput);
    const icone = document.getElementById(idIcone);

    if (!input || !icone) return;

    icone.addEventListener('click', function () {
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
    });
}

configurarOlho('senha', 'toggleSenha');

const form = document.querySelector("form");
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    mensagemErro.textContent = "Os dados apresentados não foram encontrados.";
});

document.getElementById("email").addEventListener("input", function () {
    mensagemErro.textContent = "";
});

document.getElementById("senha").addEventListener("input", function () {
    mensagemErro.textContent = "";
});