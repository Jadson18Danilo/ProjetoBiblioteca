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
}

function listarTodosLivros(){
    console.log("+-----------------------+")
    console.log("| Todos os livros       |")
    console.log("+-----------------------+")
    livros.forEach(livro => console.log(`Id ${livro.id} - Título: ${livro.titulo} `))
    console.log("+-----------------------+")
}

function menulivros(){
    const opcoeslivros = [
        "1 - Cadastrar Livro", 
        "2 - Editar Livro", 
        "3 - Excluir Livro", 
        "4 - Listar todos os livros",
        "5 - Buscar livro",
        "0 - Retornar ao menu principal"
    ]
    
    const menu = opcoeslivros.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "1":
            principal()
        break
        case "2":
            editarLivro()
        break
        case "3":
            listartodos()
        break
        case "4":
            listarTodosLivros()
            menulivros()
        break
        case "5":
            buscarlivro()
        break
        case "0":
            principal()
        break
        default:
            console.log("Alternativa incorreta")
            
    }
    
}
export default menulivros

