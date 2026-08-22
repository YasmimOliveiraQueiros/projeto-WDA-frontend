const tipoUsuario = document.body.dataset.tipoUsuario;

const perfil = document.querySelector(".perfil");
const avatar = document.querySelector(".avatar");


if (perfil && avatar) {

    const menu = document.createElement("div");

    menu.classList.add("menuPerfil");

    menu.innerHTML = `
        <button class="menuItem" id="btnIdioma">
            <span>Idioma</span>
            <i class="fa-solid fa-chevron-right"></i>
        </button>

        <div class="submenuIdioma" id="submenuIdioma">

            <button type="button" data-idioma="pt">
                Português
            </button>

            <button type="button" data-idioma="en">
                English
            </button>

            <button type="button" data-idioma="es">
                Español
            </button>

        </div>

        <button class="menuItem" id="btnSair">
            <span>Sair</span>
        </button>

        ${
            tipoUsuario === "tenant"
                ? `
                    <button
                        type="button"
                        class="menuItem encerrarConta"
                        id="btnEncerrarConta">

                        <span>Encerrar conta</span>

                    </button>
                  `
                : ""
        }
    `;


    document.body.appendChild(menu);


    /* Abrir menu */

    avatar.addEventListener("click", function (event) {

        event.stopPropagation();

        menu.classList.toggle("aberto");
        submenuIdioma.classList.remove("aberto");

    });


    const btnIdioma =
        document.getElementById("btnIdioma");

    const submenuIdioma =
        document.getElementById("submenuIdioma");


    /* Abrir submenu de idiomas */

    btnIdioma.addEventListener("click", function (event) {

        event.stopPropagation();

        submenuIdioma.classList.toggle("aberto");

    });


    /* Fechar ao clicar fora */

    document.addEventListener("click", function () {

        menu.classList.remove("aberto");
        submenuIdioma.classList.remove("aberto");

    });


    /* Impede o clique dentro do menu de fechá-lo */

    menu.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    /* Idiomas */

    document
        .querySelectorAll("[data-idioma]")
        .forEach(botao => {

            botao.addEventListener("click", function () {

                const idioma = botao.dataset.idioma;

                localStorage.setItem("idioma", idioma);

                submenuIdioma.classList.remove("aberto");
                menu.classList.remove("aberto");

            });

        });


    /* Sair */

    const btnSair =
        document.getElementById("btnSair");

    btnSair.addEventListener("click", function () {

        sessionStorage.clear();

        window.location.replace("../login/login.html");

    });


    /* Encerrar conta - somente locatário */

    if (tipoUsuario === "tenant") {

        const btnEncerrarConta =
            document.getElementById("btnEncerrarConta");


        btnEncerrarConta.addEventListener("click", function () {

            const confirmar = confirm(
                "Tem certeza que deseja encerrar sua conta? Essa ação não poderá ser desfeita."
            );

            if (!confirmar) {
                return;
            }

            /*
             * Futuramente:
             * 1. verificar pendências;
             * 2. excluir/desativar conta no backend;
             * 3. encerrar sessão;
             * 4. redirecionar para login.
             */

        });

    }

}