import prompt from "prompt-sync"
import menuPrincipal from "../index.js"
import menuLivros from "./livros/livros.js"


function cadastrarLivro(){
    const input = prompt()
    const Cadastrar = [
        "1 - ID", 
        "2 - Titulo", 
        "3 - Excluir Livro", 
        "4 - Autor",
        "5 - Editora",
        "6 - Emprestado"
    ]
    
    const novo = Cadastrar.join("\n")
    console.log(novo)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "1":
            const id = prompt("Digige o ID do Livro")
        break
        case "2":
            const titulo = prompt("Digige o ID do Livro")
        break
        case "3":
            const excluirLivro = prompt("Digige o ID do Livro")
        break
        case "4":
            const autor = prompt("Digige o ID do Livro")
        break
        case "5":
            const editora = prompt("Digige o ID do Livro")
        break
        case "6":
            const emprestado = prompt("Digige o ID do Livro")
        break
        default:
            console.log("Alternativa incorreta")
        
    }
    
}
export default cadastrarLivro()


