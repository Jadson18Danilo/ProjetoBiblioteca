import database from "./database.js"


// Repositório de usuários para manipular os dados no banco de dados
const usuarioRepository = {

    //Retorna todos os usuários no bano de dados.
    //@return {array} Lista de usuários.
    findAll: () => database.usuarios,

    // Busca um usuário pelo CPF.
    //@param {string} cpf - O CPF do usuário a ser buscado.
    //@return {Object|undefined} O usuário encontrado ou undefined se não encontrado.
    findByCpf: (cpf) => {
        return database.usuarios.find(usuario => usuario.cpf === cpf)
    },

    //Salvar um novo usuário no banco de dados.
    //@param {Object} usuario - O usuário a ser salvo.
    //@param {string} usuario.cpf - O CPF do usuário.
    //@param {straing} usuario.nome - O nome do usuário.
    //@param {string} usuario.email - o email do usuário.
    save: (usuario) => {
        const isUserExists = usuarioRepository.findByCpf(usuario.cpf)
        if (isUserExists) {
            Object.assign(isUserExists, usuario)
        } else {
            database.usuarios.push(usuario)
        }
    },
    
    //Remove um usuário do banco de dados pelo CPF.
    //@param {string} cpf - O CPF do usuário a ser removido.
    remove: (cpf) => {
        const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf)
        if (index !== -1) {
            database.usuarios.splice(index, 1)
        } else {
            throw new Error(`Usuário com CPF ${cpf} não encontrado`)
        }
    }
}

export default usuarioController;
