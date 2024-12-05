
import prompt from "prompt-sync"
import menuLivros from "./livros/livros.js"

function menuPrincipal(){
    const input = prompt()
    const opcoes = [
        "1 - Menu livro", 
        "2 - Menu Usuarios", 
        "3 - Menu Emprestimo", 
        "0 - Menu Sair"
    ]
    const menu = opcoes.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "1":
        menuLivros()
        break
        default:
            meuPrincipal()
    }
}

export default menuPrincipal
menuPrincipal()