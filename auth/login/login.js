function configurarOlho(idInput, idIcone) {

    const input = document.getElementById(idInput);
    const icone = document.getElementById(idIcone);

    if (!input || !icone) {
        return;
    }

    icone.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }

    });
}


configurarOlho("senha", "toggleSenha");

/* Usuários de teste */
const usuarios = [
    {
        id: 1,
        nome: "Levy Fernandes",
        email: "admin@altis.com",
        senha: "123456",
        role: "admin"
    },

    {
        id: 2,
        nome: "Ana Fernandes",
        email: "ana@altis.com",
        senha: "123456",
        role: "tenant"
    }
];


const form = document.querySelector("form");
const mensagemErro = document.getElementById("mensagemErro");


/* Login */
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const usuario = usuarios.find(usuario =>
        usuario.email === email &&
        usuario.senha === senha
    );

    if (!usuario) {

        mensagemErro.textContent =
            "Os dados apresentados não foram encontrados.";

        return;
    }

    sessionStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuario)
    );

    if (usuario.tipo === "admin") {

        window.location.replace(
            "../../loans/telas-admin/admin/dashboard/dashboard.html"
        );

        return;
    }

    if (usuario.tipo === "tenant") {

        window.location.replace(
            "../../loans/tenants/dashboard/dashboard.html"
        );

    }

});


/* Limpa mensagem de erro */
document.getElementById("email").addEventListener(
    "input",
    function () {

        mensagemErro.textContent = "";

    }
);

document.getElementById("senha").addEventListener(
    "input",
    function () {

        mensagemErro.textContent = "";

    }
);