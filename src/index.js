
import prompt from "prompt-sync"
import menuLivros from "./livros/livros.js"

function principal(){
    const input = prompt()
    const opcoes = [
        "1 - livro", 
        "2 - Usuarios", 
        "3 - Emprestimo", 
        "0 - Sair"
    ]
    const menu = opcoes.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "1":
        menuLivros()
        break
        case "2":
        usuarios()
        break
        case "3":
        emprestimo()
        break
        default:
            console.log("Você saiu do sistema")
    }
}

export default principal
principal()