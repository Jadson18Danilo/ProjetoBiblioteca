import prompt from "prompt-sync"
import menuPrincipal from "../index.js"

function menuLivros(){
    const input = prompt()
    const livros = [
        "1 - Cadastrar Livro", 
        "2 - Editar Livro", 
        "3 - Excluir Livro", 
        "4 - Listar todos os livros",
        "5 - Buscar livro",
        "0 - Retornar ao menu principal"
    ]
    
    const menu = livros.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "0":
            menuPrincipal()
        break
        default:
            menuLivros()
    }
    
}
export default menuLivros

