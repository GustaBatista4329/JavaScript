function saudacao(nome){
    return `Bom dia ${nome}`
}

const variavel = saudacao('Gustavo')
console.log(variavel)



function soma(x, y){
    const resultado = x + y
    return resultado
}

console.log(soma(2,2))
console.log(soma(3,2))
console.log(soma(2,8))


//arrow function
const raiz = (n) => n ** 0.5

console.log(raiz(9))
console.log(raiz(81))