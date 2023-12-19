/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)*/


/*function criaPessoa(nome, sobrenome){
    return {
    nome,
    sobrenome
    
}
}

const pessoa1 = criaPessoa('João', 'Vitor')
const pessoa2 = criaPessoa('Gustavo', 'Batista')

console.log(pessoa1.nome, pessoa2.nome)*/


const pessoa1 = {
    nome:'Gustavo',
    sobrenome:'Batista',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


