const tipoUsuario = document.body.dataset.tipoUsuario;

const perfil = document.querySelector(".perfil");
const avatar = document.querySelector(".avatar");


if (perfil && avatar) {

    const menu = document.createElement("div");

    menu.classList.add("menuPerfil");

    menu.innerHTML = `
        ${
            tipoUsuario === "tenant"
                ? `
                    <button class="menuItem" id="btnEditarPerfil">
                        <span>Editar perfil</span>
                    </button>
                  `
                : ""
        }

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


    /* Modal de editar perfil (só locatário) */
    if (tipoUsuario === "tenant") {

        const modalPerfil = document.createElement("div");

        modalPerfil.classList.add("modal");
        modalPerfil.id = "modalEditarPerfil";

        modalPerfil.innerHTML = `
        
            <div class="modalConteudo">

                <div class="modalCabecalho">
                    <h2>Editar perfil</h2>

                    <button
                        type="button"
                        class="fecharModal"
                        id="fecharModalEditarPerfil">
                        &times;
                    </button>
                </div>

                <form id="formEditarPerfil">

                    <div class="campo campoCompleto">
                        <label for="perfilNome">Nome</label>
                        <input type="text" id="perfilNome" required>
                    </div>

                    <div class="campo campoCompleto">
                        <label for="perfilEmail">E-mail</label>
                        <input type="email" id="perfilEmail" required>
                    </div>

                    <div class="campo">
                        <label for="perfilTelefone">Telefone</label>
                        <input type="text" id="perfilTelefone">
                    </div>

                    <div class="campo">
                        <label for="perfilEndereco">Endereço</label>
                        <input type="text" id="perfilEndereco">
                    </div>

                    <div class="campo">
                        <label for="perfilCpf">CPF</label>
                        <input type="text" id="perfilCpf" disabled>
                    </div>

                    <div class="campo">
                        <label for="perfilDataNascimento">Data de nascimento</label>
                        <input type="date" id="perfilDataNascimento" disabled>
                    </div>

                    <div class="campo campoCompleto">
                        <label for="perfilSenha">Nova senha (opcional)</label>
                        <input
                            type="password"
                            id="perfilSenha"
                            placeholder="Deixe em branco para não alterar">
                    </div>

                    <div class="campo campoCompleto">
                        <label for="perfilConfirmarSenha">Confirmar nova senha</label>
                        <input
                            type="password"
                            id="perfilConfirmarSenha">
                    </div>

                    <p id="perfilMensagemErro" class="mensagem-erro"></p>

                    <div class="modalAcoes">
                        <button
                            type="button"
                            class="btnCancelar"
                            id="cancelarEditarPerfil">
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            class="btnSalvar">
                            Salvar
                        </button>
                    </div>

                </form>

            </div>
        `;

        document.body.appendChild(modalPerfil);


        const btnEditarPerfil = document.getElementById("btnEditarPerfil");
        const fecharModalEditarPerfil = document.getElementById("fecharModalEditarPerfil");
        const cancelarEditarPerfil = document.getElementById("cancelarEditarPerfil");
        const formEditarPerfil = document.getElementById("formEditarPerfil");
        const perfilMensagemErro = document.getElementById("perfilMensagemErro");


        function abrirModalPerfil() {

            const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado") || "null");

            if (!usuarioLogado) {
                return;
            }

            document.getElementById("perfilNome").value = usuarioLogado.nome || "";
            document.getElementById("perfilEmail").value = usuarioLogado.email || "";
            document.getElementById("perfilTelefone").value = usuarioLogado.telefone || "";
            document.getElementById("perfilEndereco").value = usuarioLogado.endereco || "";
            document.getElementById("perfilCpf").value = usuarioLogado.cpf || "";
            document.getElementById("perfilDataNascimento").value = usuarioLogado.dataNascimento || "";
            document.getElementById("perfilSenha").value = "";
            document.getElementById("perfilConfirmarSenha").value = "";
            perfilMensagemErro.textContent = "";

            modalPerfil.classList.add("aberto");
            menu.classList.remove("aberto");
        }


        btnEditarPerfil.addEventListener("click", abrirModalPerfil);

        fecharModalEditarPerfil.addEventListener("click", function () {
            modalPerfil.classList.remove("aberto");
        });

        cancelarEditarPerfil.addEventListener("click", function () {
            modalPerfil.classList.remove("aberto");
        });

        modalPerfil.addEventListener("click", function (event) {
            event.stopPropagation();
        });


        formEditarPerfil.addEventListener("submit", function (event) {

            event.preventDefault();

            const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado") || "null");

            if (!usuarioLogado) {
                return;
            }

            const novaSenha = document.getElementById("perfilSenha").value;
            const confirmarSenha = document.getElementById("perfilConfirmarSenha").value;

            if (novaSenha !== "" && novaSenha !== confirmarSenha) {
                perfilMensagemErro.textContent = "As senhas não coincidem.";
                return;
            }

            /* Atualiza os dados só na sessão atual (sem persistir em banco/localStorage) */
            usuarioLogado.nome = document.getElementById("perfilNome").value.trim();
            usuarioLogado.email = document.getElementById("perfilEmail").value.trim();
            usuarioLogado.telefone = document.getElementById("perfilTelefone").value.trim();
            usuarioLogado.endereco = document.getElementById("perfilEndereco").value.trim();
            /* CPF e data de nascimento não são alterados */

            if (novaSenha !== "") {
                usuarioLogado.senha = novaSenha;
            }

            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

            /* Atualiza o nome exibido no cabeçalho, se existir */
            const spanPerfil = perfil.querySelector("span");
            if (spanPerfil) {
                spanPerfil.textContent = usuarioLogado.nome;
            }

            modalPerfil.classList.remove("aberto");
            alert("Perfil atualizado com sucesso! (válido até você sair da conta)");
        });

    }


    /* Traduz os textos recém-criados do menu com o idioma já salvo */
    if (typeof traduzirPagina === "function") {
        traduzirPagina(localStorage.getItem("idioma") || "pt");
    }


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


    /* Idiomas — traduz a página inteira de verdade */

    document
        .querySelectorAll("[data-idioma]")
        .forEach(botao => {

            botao.addEventListener("click", function () {

                const idioma = botao.dataset.idioma;

                if (typeof traduzirPagina === "function") {
                    traduzirPagina(idioma);
                } else {
                    localStorage.setItem("idioma", idioma);
                }

                submenuIdioma.classList.remove("aberto");
                menu.classList.remove("aberto");

            });

        });


    /* Sair */

    const btnSair =
        document.getElementById("btnSair");

    btnSair.addEventListener("click", function () {

        sessionStorage.clear();

        window.location.replace("/auth/login/login.html");

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

            sessionStorage.clear();

            window.location.replace("/auth/login/login.html");

        });

    }

}