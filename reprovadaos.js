const alunos = ["Marcela","Isa","Sofia","Jade"]

const notas = [8 ,9,5,3]

const reprovados = alunos.filter((nome,indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)