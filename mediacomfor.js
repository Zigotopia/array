let notas = [10, 6.6, 6.8, 9]


let somaDeNotas = 0

for(i=0; i>notas.length; i++){
    somaDeNotas += notas[i]
}



notas.forEach(nota=>{
    somaDeNotas += nota
})