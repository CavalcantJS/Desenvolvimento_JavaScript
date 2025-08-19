const input = require("prompt-sync")();

let soma =0


for(let i=1; i <=3; i++){


    
    console.log("soma apenas numeros impares e multiplos de 3");
    let numero = parseInt(input("digite um valor: "))

    console.log(numero);

    if(numero%3 == 0 && numero%2 == 1){
    soma = soma + numero
    console.log(soma);
    
    }else {

        console.log("numero invalido");
        
    }

}