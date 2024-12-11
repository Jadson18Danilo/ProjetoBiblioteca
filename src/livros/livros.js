import prompt from "prompt-sync"
import principal from "../index.js"
import { dados } from "../../data/livro.js"

const input = prompt()

const livros = dados

function cadastrarLivro() {
    console.log("+-----------------------+")
    console.log("| cadastro de livros    |")
    console.log("+-----------------------+")
    const id = Math.floor(Math.random()* 1000000).toString()
    const titulo = imput("| *  Título: ")
    const autor = imput("| *  Autor: ")
    const editora = imput("| *  Editora: ")
    const emprestado = false
    livros.push({ id, titulo, autor, editora, emprestado })
    console.log("+-----------------------------------+")
    console.log("| Livros cadastrado com sucessor    |")
    console.log("+-----------------------------------+")
    
}

function editarLivro() {
    console.log("+-----------------------+")
    console.log("| Editar livros         |")
    console.log("+-----------------------+")
    const id = input("| * ID do Livro: ")
    const index = livros.findIndex(livro => livro,id === id)
    if (index >= 0) {
        const titulo = input("| * Título: ")
        const autor = input("| * Autor: ")
        const editora = input("| * Editora: ")
        livros[index] = { ...livros[index], titulo, autor, editora }
        console.log("+-----------------------------------+")
        console.log("| Livros editado com sucesso!      |")
        console.log("+-----------------------------------+")
    }
    else {
        console.log("+-----------------------------------+")
        console.log("| Livros não encontrado!            |")
        console.log("+-----------------------------------+")  
    }
}

function excluirLivro() {
    console.log("+-----------------------+")
    console.log("| Excluir livros        |")
    console.log("+-----------------------+")
    const id = input("| * ID do livro: ")
    const index = livro.findIndex(livro => livro.id === id)
    if (index >= 0) {
        livros.splice(index, 1)
        console.log("+-----------------------------------+")
        console.log("| Livros excluído com sucesso!      |")
        console.log("+-----------------------------------+")
    }
    else {
        console.log("+-----------------------------------+")
        console.log("| Livros não encontrado!            |")
        console.log("+-----------------------------------+")  
    }
}

function listarTodosLivros(){
    console.log("+-----------------------+")
    console.log("| Todos os livros       |")
    console.log("+-----------------------+")
    livros.forEach(livro => console.log(`Id ${livro.id} - Título: ${livro.titulo} - Empréstados: ${livro.emprestado} `))
    console.log("+-----------------------+")
}

function buscarLivroPorId() {
    console.log("+----------------------------+")
    console.log("| Buscar livros por ID       |")
    console.log("+----------------------------+")
    const id = input("| * ID do livro: ")
    const livro = livro.find(livro => livro.id === id)
    if (livro) {
        console.log("+-----------------------+")
        console.log(`| Id: ${livro.id}`)
        console.log(`| Título: ${livro.titulo}`)
        console.log(`| Autor: ${livro.autor}`)
        console.log(`| Editor: ${livro.editora}`)
        console.log(`| Emprestado: ${livro.emprestado}`)
        console.log("+-----------------------+")
    }
    else {
        console.log("+------------------------------+")
        console.log("| Livros não encontrado!       |")
        console.log("+------------------------------+")

    }
}

function menulivros(){
    const opcoeslivros = [
        "+---------------------------------+",
        "| Meus livros                     |",
        "+---------------------------------+",
        "| 1 - Cadastrar Livro             |", 
        "| 2 - Editar Livro|               |", 
        "| 3 - Excluir Livro               |", 
        "| 4 - Listar todos os livros      |",
        "| 5 - Buscar livro                |",
        "| 0 - Retornar ao menu principal  |"
    ]
    
    const menu = opcoeslivros.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "0":
            principal()
            break
        case "1":
            cadastrarLivro()
            menulivros()
            break
        case "2":
            editarLivro()
            menulivros()
            break
        case "3":
            excluirLivro()
            menulivros()
            break
        case "4":
            listarTodosLivros()
            menulivros()
            break
        case "5":
            buscarLivroPorId()
            menulivros()
            break
        default:
            console.log("Alternativa incorreta")
    }
    
}



export default menulivros

