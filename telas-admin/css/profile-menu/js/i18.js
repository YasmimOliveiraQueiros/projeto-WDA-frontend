/*
 * Sistema global de idiomas — Altis+ Biblioteca
 * (Tradução automática por correspondência de texto, sem precisar marcar HTML)
 *
 * Como usar:
 * 1. Inclua este arquivo em TODAS as páginas, ANTES do profile-menu.js:
 *    <script src="../../../assets/js/i18n.js"></script>
 *    <script src="../css/profile-menu/profile-menu.js"></script>
 *    (ajuste o caminho relativo conforme a profundidade da pasta)
 *
 * 2. Para traduzir um texto novo, adicione uma linha no dicionário abaixo,
 *    usando o texto em português EXATAMENTE como aparece no HTML como chave:
 *
 *    "Texto em português": { en: "Text in English", es: "Texto en español" },
 *
 * 3. Para conteúdo gerado dinamicamente por JS (ex: linhas de tabela criadas
 *    depois do carregamento, badges de status trocados no clique), chame
 *    manualmente no final da função que gera esse conteúdo:
 *
 *    traduzirPagina(localStorage.getItem("idioma") || "pt");
 *
 *    Isso garante que textos novos inseridos na página também sejam traduzidos.
 */

const dicionario = {

    /* Sidebar */
    "Dashboard": { en: "Dashboard", es: "Panel" },
    "Aluguéis": { en: "Loans", es: "Préstamos" },
    "Livros": { en: "Books", es: "Libros" },
    "Editoras": { en: "Publishers", es: "Editoriales" },
    "Usuários": { en: "Users", es: "Usuarios" },
    "Admin": { en: "Admin", es: "Admin" },

    /* Menu de perfil */
    "Idioma": { en: "Language", es: "Idioma" },
    "Sair": { en: "Log out", es: "Cerrar sesión" },
    "Encerrar conta": { en: "Close account", es: "Cerrar cuenta" },

    /* Login */
    "Bem-vindo de volta!": { en: "Welcome back!", es: "¡Bienvenido de nuevo!" },
    "Faça login para acessar o sistema": { en: "Log in to access the system", es: "Inicia sesión para acceder al sistema" },
    "E-mail": { en: "Email", es: "Correo electrónico" },
    "Senha": { en: "Password", es: "Contraseña" },
    "Entrar": { en: "Log in", es: "Entrar" },
    "Recuperar senha?": { en: "Forgot password?", es: "¿Olvidaste tu contraseña?" },
    "Realizar cadastro?": { en: "Create an account?", es: "¿Crear una cuenta?" },
    "seuemail@email.com": { en: "youremail@email.com", es: "tucorreo@email.com" },

    /* Cadastro */
    "Confirmar senha": { en: "Confirm password", es: "Confirmar contraseña" },

    /* Dashboard admin */
    "Altis+ Biblioteca": { en: "Altis+ Library", es: "Altis+ Biblioteca" },
    "Visão geral do sistema": { en: "System overview", es: "Resumen del sistema" },
    "Empréstimos por mês": { en: "Loans per month", es: "Préstamos por mes" },
    "Livros por status": { en: "Books by status", es: "Libros por estado" },
    "Empréstimos recentes": { en: "Recent loans", es: "Préstamos recientes" },
    "Ver todos": { en: "View all", es: "Ver todos" },
    "Disponíveis": { en: "Available", es: "Disponibles" },
    "Alugados": { en: "Borrowed", es: "Prestados" },
    "Pendentes": { en: "Pending", es: "Pendientes" },
    "Atrasados": { en: "Overdue", es: "Atrasados" },

    /* Painel do locatário */
    "Seu painel de leitura": { en: "Your reading dashboard", es: "Tu panel de lectura" },
    "Último livro alugado": { en: "Last borrowed book", es: "Último libro prestado" },
    "Livro mais alugado": { en: "Most borrowed book", es: "Libro más prestado" },
    "Meus aluguéis": { en: "My loans", es: "Mis préstamos" },
    "Aluguel": { en: "Loan date", es: "Fecha de préstamo" },
    "Devolução": { en: "Return date", es: "Fecha de devolución" },
    "Status": { en: "Status", es: "Estado" },

    /* Status usados em tabelas/badges */
    "Pendente": { en: "Pending", es: "Pendiente" },
    "Devolvido": { en: "Returned", es: "Devuelto" },
    "Devolvido C/A": { en: "Returned Late", es: "Devuelto C/A" },
    "Disponível": { en: "Available", es: "Disponible" },
    "Alugado": { en: "Borrowed", es: "Prestado" },
    "Ativa": { en: "Active", es: "Activa" },
    "Inativa": { en: "Inactive", es: "Inactiva" },

    /* Tabelas de gestão */
    "Locatário": { en: "Tenant", es: "Inquilino" },
    "Livro": { en: "Book", es: "Libro" },
    "Ação": { en: "Action", es: "Acción" },
    "Título": { en: "Title", es: "Título" },
    "Autor": { en: "Author", es: "Autor" },
    "Nome": { en: "Name", es: "Nombre" },
    "Novo aluguel": { en: "New loan", es: "Nuevo préstamo" },
    "Novo livro": { en: "New book", es: "Nuevo libro" },
    "Nova editora": { en: "New publisher", es: "Nueva editorial" },
    "Salvar": { en: "Save", es: "Guardar" },
    "Cancelar": { en: "Cancel", es: "Cancelar" },

    /* Subtítulos de cada tela admin */
    "Controle de empréstimos de livros": { en: "Book loan management", es: "Control de préstamos de libros" },
    "Controle de gestão de livros": { en: "Book management", es: "Control de gestión de libros" },
    "Controle de editoras": { en: "Publisher management", es: "Control de editoriales" },
    "Controle de usuários": { en: "User management", es: "Control de usuarios" },

    /* Cards no plural (diferentes do singular já usado nos status) */
    "Devolvidos": { en: "Returned", es: "Devueltos" },
    "Livros vinculados": { en: "Linked books", es: "Libros vinculados" },
    "Livros cadastrados": { en: "Registered books", es: "Libros registrados" },

    /* Botões "+ Novo..." (o sinal de + faz parte do texto) */
    "+ Novo aluguel": { en: "+ New loan", es: "+ Nuevo préstamo" },
    "+ Novo livro": { en: "+ New book", es: "+ Nuevo libro" },
    "+ Nova editora": { en: "+ New publisher", es: "+ Nueva editorial" },

    /* Placeholders de busca */
    "Buscar por locatário ou livro": { en: "Search by tenant or book", es: "Buscar por inquilino o libro" },
    "Buscar por título ou autor": { en: "Search by title or author", es: "Buscar por título o autor" },
    "Buscar por nome ou e-mail": { en: "Search by name or email", es: "Buscar por nombre o correo" },
    "Buscar por nome ou email": { en: "Search by name or email", es: "Buscar por nombre o correo" },

    /* Filtro de status */
    "Todos os status": { en: "All statuses", es: "Todos los estados" },

    /* Tabela de livros */
    "Editora": { en: "Publisher", es: "Editorial" },

    /* Tela de usuários */
    "Ativos": { en: "Active", es: "Activos" },
    "Inativos": { en: "Inactive", es: "Inactivos" },
    "Ativo": { en: "Active", es: "Activo" },
    "Inativo": { en: "Inactive", es: "Inactivo" },
    "Ativar": { en: "Activate", es: "Activar" },
    "Inativar": { en: "Deactivate", es: "Desactivar" },
    "Telefone": { en: "Phone", es: "Teléfono" },
    "Livros alugados": { en: "Books borrowed", es: "Libros prestados" }

};


/* Guarda o texto original de cada nó de texto antes de qualquer tradução */
const textosOriginais = new WeakMap();

/* Elementos onde procuramos texto traduzível */
const seletorTraduzivel =
    "h1, h2, h3, h4, label, button, a, strong, th, option, small, p, span";


function capturarOriginais() {

    document.querySelectorAll(seletorTraduzivel).forEach(function (elemento) {

        Array.from(elemento.childNodes).forEach(function (no) {

            if (no.nodeType === Node.TEXT_NODE && no.textContent.trim() !== "") {

                if (!textosOriginais.has(no)) {
                    textosOriginais.set(no, no.textContent);
                }

            }

        });

    });

    /* Placeholders de input */
    document.querySelectorAll("[placeholder]").forEach(function (campo) {

        if (!campo.dataset.originalPlaceholder) {
            campo.dataset.originalPlaceholder = campo.placeholder;
        }

    });

}


function traduzirPagina(idioma) {

    capturarOriginais();

    document.querySelectorAll(seletorTraduzivel).forEach(function (elemento) {

        Array.from(elemento.childNodes).forEach(function (no) {

            if (no.nodeType !== Node.TEXT_NODE || !textosOriginais.has(no)) {
                return;
            }

            const original = textosOriginais.get(no);
            const chave = original.trim();

            if (idioma === "pt" || !dicionario[chave] || !dicionario[chave][idioma]) {
                no.textContent = original;
                return;
            }

            const espacoAntes = original.match(/^\s*/)[0];
            const espacoDepois = original.match(/\s*$/)[0];

            no.textContent = espacoAntes + dicionario[chave][idioma] + espacoDepois;

        });

    });

    /* Traduz placeholders */
    document.querySelectorAll("[placeholder]").forEach(function (campo) {

        const original = campo.dataset.originalPlaceholder;

        if (!original) {
            return;
        }

        if (idioma === "pt" || !dicionario[original] || !dicionario[original][idioma]) {
            campo.placeholder = original;
        } else {
            campo.placeholder = dicionario[original][idioma];
        }

    });

    localStorage.setItem("idioma", idioma);

    /* Marca visualmente qual idioma está ativo no submenu, se existir */
    document.querySelectorAll("[data-idioma]").forEach(function (botao) {
        botao.classList.toggle("idiomaAtivo", botao.dataset.idioma === idioma);
    });

}


/* Aplica automaticamente o idioma salvo assim que a página carrega */
document.addEventListener("DOMContentLoaded", function () {
    const idiomaSalvo = localStorage.getItem("idioma") || "pt";

    traduzirPagina(idiomaSalvo);

});