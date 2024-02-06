import { createHash } from 'crypto'


class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }
    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Usuario altenticado com sucesso.");
            return true;
        }
        //console.log('Usuario ou senha incorretos.');
        return false;
    }
}


const usuario = new Usuario('Marcos Paulo', 'senha123');


const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"];

senhasComuns.map( senha => {
    if(usuario.autentica("Marcos Paulo", senha))
    {
        console.log(`A senha do usuário é ${senha}`)
    }
})