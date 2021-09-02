let nAlunos = 11;

for (let contador = 0; contador <= nAlunos; contador++) {
   

   if (contador == 0){
       console.log("O numero é Zero")
    }
   else if (contador%2 == 0){
       console.log("o numero " + contador + " é par")
    }
    else {console.log("o numero " + contador + " é impar")
    }

}
let Alunos = ["Pedro", "Jorge", "Caio", "Eduardo"]
//for OF
for (let nome of Alunos) {
    console.log(nome)
}

//for EACH

Alunos.forEach(nome => {
    console.log("Aluno ", nome)
});

let nomeAlunos = 10

nomes = 0
while (nomes <= nomeAlunos) {
    console.log("Digito: " + nomes  )
    nomes++
}
