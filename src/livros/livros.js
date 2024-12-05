import meuPrincipal from "../index.js"

import Promp from "prompt-sync"

function meuLivros(){
    const input = prompt()
    const opcoes = [
        "1 - Cadastrar Livro", 
        "2 - Editar Livro", 
        "3 - Excluir Livro", 
        "4 - Listar todos os livros",
        "5 - Buscar livro",
        "6 - Retornar ao menu principal"
    ]
    
    const menu = opcoes.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "0":
            meuPrincipal()
            break
        default:
            meuLivros()
    }
    
}

export default meuLivros

// id: 1, titulo: "Avatar", autor:"Aang", editora: "Korra", emprestado: false
