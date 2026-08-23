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

/* Usuários de teste */
const usuarios = [

    {
        id: 1,
        nome: "Levy Fernandes",
        email: "admin@email.com",
        senha: "123456",
        role: "admin"
    },

    {
        id: 2,
        nome: "Ana Fernandes",
        email: "ana@email.com",
        senha: "123456",
        role: "tenant"
    }
];


const form = document.querySelector("form");
const mensagemErro = document.getElementById("mensagemErro");


/* Login */
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;

    const usuario = usuarios.find(usuario =>
        usuario.email.toLowerCase() === email &&
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


    /* Redirecionamento */
    if (usuario.role === "admin") {

        window.location.replace(
            "../../telas-admin/dashboard/dashboard.html"
        );

        return;
    }


    if (usuario.role === "tenant") {

        window.location.replace(
            "../../tenants/dashboard/dashboard.html"
        );

        return;
    }

});


/* Limpa mensagem de erro */
document.getElementById("email").addEventListener("input", function () {
        mensagemErro.textContent = "";
    }
);

document.getElementById("senha").addEventListener("input", function () {
        mensagemErro.textContent = "";
    }
);