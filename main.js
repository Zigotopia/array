let alunosDaSala =[ "Marcela","Alice","Mariana","Fernando"]
let notasDaSala = [10,6,7,9]

let listaNotasDaSala =[alunosDaSala,notasDaSala]

let notasPorAlunos = (NomeAluno)=>{
    if(listaNotasDaSala[0].includes(NomeAluno)){
      let index = listaNotasDaSala[0].indexOf(NomeAluno)
     return index , `sua nota é ${listaNotasDaSala[1][index]}`
 }
 else{
     return  "o aluno não esta cadastrado"
 }
}


