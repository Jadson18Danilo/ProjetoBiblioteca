
import menulivros from "../src"

import Promp from "prompt-sync"

function meuPrincipal(){
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
        case "0":
            break
            meuLivros()
            break
            default:
            meuPrincipal()
    }
   
}

export default meuPrincipal

meuPrincipal()