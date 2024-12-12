// Arquivos que manipula o banco de dados(com regras de negócio)


const database = {
    livros: [
        {
            id: "943565",
            titulo: "O Senhor dos Anéis",
            autor: "J. R. R. Tolkien",
            editora: "HarperCollins",
            emprestado: true
        }
    ],
    usuarios: [
        {
            cpf: "12345678901",
            nome: "Francisco de Assis",
            fone: "888888888",
            email: "chico@email.com"
        }
    ],
    emprestimos: [
        {
            id: "123456",
            usuarioCpf: "12345678901",
            livroId: "943565",
            dataEmprestimo: "12/12/2024",
            dataDevolucao: "15/12/2024"
        },
    ]
}

export default database