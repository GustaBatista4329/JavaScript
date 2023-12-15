const nome = 'Luiz Otávio'
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)
console.log(alunos[2])
console.log(alunos[0])

alunos[0] = 'Gustavo'
alunos[3] = 'Luiza'
console.log(alunos)

//alunos[alunos.length] = 'Gabriel'
//alunos[alunos.length] = 'Fabio'
alunos.push('Gabriel')
alunos.push('Luiza')
console.log(alunos)

alunos.unshift('Heitor')
alunos.unshift('Carlos')
console.log(alunos)

alunos.pop()
console.log(alunos)
alunos.shift()
console.log(alunos)

delete alunos[1]
console.log(alunos)

console.log(alunos.slice(0, 3))

console.log(alunos instanceof Array)