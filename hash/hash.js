import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

//console.log(criaHash('uma String Qualquer'))

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuario altenticado com sucesso.");
            return true;
        }
        console.log('Usuario ou senha incorretos.');
        return false;
    }
}


const usuario = new Usuario('Marcos Paulo', 'minhaSenha');
console.log(usuario);

//Caso de sucesso
usuario.autentica('Marcos Paulo', 'minhaSenha');

//Caso de erro
usuario.autentica('MP', 'minhaSenha');
usuario.autentica('Marcos Paulo', 'senha123');
