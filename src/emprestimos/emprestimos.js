import Prompt from "prompt-sync"

import principal from "../index.js"
import { dados as emprestimos } from "../../data/emprestimos.js"
import { dados as usuarios } from "../../data/usuario.js"
import { dados as livros } from "../../data/livro.js"

const input = prompt()

function realizarEmprestimo() {
    console.log("+-----------------------------+")
    console.log("| Realizar Emprestimos        |")
    console.log("+-----------------------------+")
    
}

function renovarEmprestimo() {
    console.log("+-----------------------------+")
    console.log("| Renovar Emprestimos         |")
    console.log("+-----------------------------+")
}


function listarTodosEmprestimos() {
    console.log("+-----------------------------+")
    console.log("| Todos os Emprestimos       |")
    console.log("+-----------------------------+")
    emprestimos.forEach(emprestimo => {
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.usuarioCpf)
        const livro = livros.find(livro => livro.id === emprestimo.livroId)
        console.log(`| Id: ${emprestimo.id} - Data de Empréstimo: ${emprestimo.dataEmprestimo}`)
        console.log(`| Usuário: ${usuario.nome} - Livro: ${livro.livro}\n`)
    })
}

function buscarEmprestimoPorId() {
    console.log("+-----------------------------+")
    console.log("| Buscar Emprestimos          |")
    console.log("+-----------------------------+")
}

function menuEmprestimo() {
    const opcoes = [
        "+---------------------------------+",
        "| Menu Emprestimo                 |",
        "+---------------------------------+",
        "| 1 - Realizar Empréstimo         |", 
        "| 2 - Renovar Empréstimo          |", 
        "| 3 - Realizar Devolução          |", 
        "| 4 - Listar todos os Empréstimo  |",
        "| 5 - Buscar emprestimo por ID    |",
        "| 0 - Retornar ao menu principal  |"
    ]
    


    const menu = opcoesEmprestimo.join("\n")
    console.log(menu)
    let opcao = input("Digite a opção desejada: ")
    switch(opcao) {
        case "0":
            menuEmprestimo()
            break
        case "1":
            realizarEmprestimo()
            menuEmprestimo()
            break
        case "2":
            renovarEmprestimo()
            menuEmprestimo()
            break
        case "3":
            listarTodosEmprestimos()
            menuEmprestimo()
            break
        case "4":
            buscarEmprestimoPorId()
            menuEmprestimo()
        default:
            console.log("Alternativa incorreta")
    }
    
}
export default menuEmprestimo

