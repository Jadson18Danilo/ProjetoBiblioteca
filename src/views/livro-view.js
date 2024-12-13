// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../utils/format-utils.js";
import menuPrincipal from "./main-view.js";
import livroController from "../controllers/livro-controle.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;

/**
 * Cadastra um novo livro no sistema.
 * Solicita os dados do livro (ID, titulo, autor, editora e emprestado) e os envia para o controlador.
 */
const cadastrarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar livro", width));
    console.log(utils.createBase(width));
    const id = Math.floor(Math.random() * 1000000).toString();
    const titulo = prompt("| * titulo: ");
    const autor = prompt("| * autor: ");
    const editora = prompt("| * Editora: ");
    const emprestado = false;
    livroController.save({ id, titulo, autor, editora, emprestado });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("livro cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    livroView();
};

const livroView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Livros", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar livro", width));
    console.log(utils.formatMessage("2 - Editar livro", width));
    console.log(utils.formatMessage("3 - Excluir livro", width));
    console.log(utils.formatMessage("4 - Listar todos os livros", width));
    console.log(utils.formatMessage("5 - Buscar livro por id", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break
        case "1":
            cadastrarLivro();
            break;
        case "2":
            // editarlivro();
            break;
        case "3":
            // excluirlivro();
            break;
        case "4":
            // listarlivros();
            break;
        case "5":
            // buscarlivro();
            break;
        default:
            livroView();
    }
};

// Exporta a visualização de livros
export default livroView;