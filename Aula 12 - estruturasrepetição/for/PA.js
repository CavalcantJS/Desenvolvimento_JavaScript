const input = require("prompt-sync")();


console.log("Calculadora P.A");


let razao = parseInt(input("digite um valor para a razão: "))
let inicio = parseInt(input("digite um valor para iniciar: "))
let fim = parseInt(input("digite um valor para terminar: "))



for(let i = 0; i <fim; i++){


    let termo = inicio + i * razao
    
    console.log(termo);


    
    }
        

