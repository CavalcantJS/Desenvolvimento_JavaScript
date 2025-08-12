
let distancia = 205
let preço=0.5

if (distancia <= 200){

    preço = preço * distancia
    

    console.log("o preço da viagem vai ser de:", preço)

}else{

    preço = 0.45
    preço = preço * distancia

    console.log("o preço da viagem vai ser de:", preço)

}