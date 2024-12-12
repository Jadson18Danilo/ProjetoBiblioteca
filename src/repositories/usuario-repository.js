import { database } from "./database";



export const findAll = () => database.usuarios;

export const findByCpf = (cpf) => {
    database.usuarios.find(usuarios => usuarios.cpf === cpf)
};

export const save = (usuarios) => {
    database.usuarios.push(usuarios);
}

export const update = (cpf, nome, fone, email) => {
    const usuario = findBy(Cpf);
    usuario.nome = nome;
    usuario.cpf = cpf
    usuario.fone = fone;
    usuario.email = email;
};

export const remove = (cpf) => {
    const index = database.usuarios.findIndex(usuario = usuario.cpf === cpf);
    database.usuarios.splice(index, 1);
}



