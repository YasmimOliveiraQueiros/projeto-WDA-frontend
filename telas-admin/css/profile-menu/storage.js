/*
 * storage.js — Compartilha livros e editoras entre as telas
 * de Livros e Editoras, usando o localStorage do navegador.
*/

const CHAVE_LIVROS = "livros";
const CHAVE_EDITORAS = "editoras";


const livrosPadrao = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", editora: "Companhia das Letras", status: "alugado", vinculo: true, observacao: "" },
    { id: 2, titulo: "O Alquimista", autor: "Paulo Coelho", editora: "Rocco", status: "disponivel", vinculo: false, observacao: "" },
    { id: 3, titulo: "1984", autor: "George Orwell", editora: "Record", status: "alugado", vinculo: true, observacao: "" }
];

const editorasPadrao = [
    { id: 1, nome: "Companhia das Letras", email: "contato@companhia.com", cnpj: "00.000.000/0000-00", cidade: "São Paulo - SP", exemplares: 2, status: "ativa", vinculo: true },
    { id: 2, nome: "Record", email: "contato@record.com", cnpj: "00.000.000/0000-00", cidade: "Rio de Janeiro - RJ", exemplares: 8, status: "ativa", vinculo: true },
    { id: 3, nome: "Rocco", email: "contato@rocco.com", cnpj: "00.000.000/0000-00", cidade: "Rio de Janeiro - RJ", exemplares: 10, status: "ativa", vinculo: true }
];


function carregarLivros() {
    const dados = localStorage.getItem(CHAVE_LIVROS);
    if (dados) {
        return JSON.parse(dados);
    }
    salvarLivros(livrosPadrao);
    return livrosPadrao;
}

function salvarLivros(lista) {
    localStorage.setItem(CHAVE_LIVROS, JSON.stringify(lista));
}


function carregarEditoras() {
    const dados = localStorage.getItem(CHAVE_EDITORAS);
    if (dados) {
        return JSON.parse(dados);
    }
    salvarEditoras(editorasPadrao);
    return editorasPadrao;
}

function salvarEditoras(lista) {
    localStorage.setItem(CHAVE_EDITORAS, JSON.stringify(lista));
}