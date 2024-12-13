import livroRepository from "../repositories/livro-repository.js";

/**
 * Controlador de Usuários.
 * 
 * Responsável por intermediar as chamadas entre a camada de serviço e o repositório de usuários.
 * Fornece métodos para salvar, remover, listar e buscar usuários pelo CPF.
 */
const livroController = {

    /**
     * Salva ou atualiza um usuário.
     * 
     * @param {Object} livro - Objeto representando o usuário.
     * @param {string} livro.id - CPF do usuário (obrigatório).
     * @param {string} [livro.nome] - Nome do usuário.
     * @param {string} [livro.fone] - Telefone do usuário.
     * @param {string} [livro.email] - E-mail do usuário.
     * @returns {void}
     */
    save: (livro) => livroRepository.save(livro),

    /**
     * Remove um usuário pelo CPF.
     * 
     * @param {string} id - Id do usuário a ser removido.
     * @returns {void}
     */
    remove: (id) => livroRepository.remove(id),

    /**
     * Retorna uma lista com todos os usuários.
     * 
     * @returns {Array<Object>} - Lista de usuários cadastrados.
     */
    findAll: () => livroRepository.findAll(),

    /**
     * Busca um usuário pelo CPF.
     * 
     * @param {string} cpf - CPF do usuário a ser buscado.
     * @returns {Object|null} - Objeto do usuário encontrado ou null se não existir.
     */
    findByCpf: (cpf) => livroRepository.findByCpf(cpf)

}

export default livroController;