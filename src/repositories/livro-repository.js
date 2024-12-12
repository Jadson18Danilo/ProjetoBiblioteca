import { database } from "./database";

export const findAll = () => database.livros;

export const findByid = (id) => {
    database.livros.find(livros => livros.id === id)
};

export const save = (livro) => {
    database.livros.push(livro);
}

export const update = (id, usuario, fone, email) => {
    const usuario = findBy(id);
    usuario.id = id
    usuario.usuario = usuario;
    usuario.fone = fone;
    usuario.email = email;
};

export const remove = (id) => {
    const index = database.livros.findIndex(usuario = usuario.id === id);
    database.livros.splice(index, 1);
}

