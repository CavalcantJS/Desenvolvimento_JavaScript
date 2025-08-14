function mostrarResultado(){
    let ladoA = parseInt(document.querySelector("#ladoA").value)
    let ladoB = parseInt(document.querySelector("#ladoB").value)
    let ladoC = parseInt(document.querySelector("#ladoC").value)
    
    let resultado = document.querySelector("#resultado")


    if(ladoA== ladoB && ladoB == ladoC){


         resultado.innerHTML = "O triângulo é equilatero"

    }else if(ladoA == ladoB || ladoA == ladoC || ladoB ==ladoC){

         resultado.innerHTML = "O triãngulo é isosceles"

        
    }else{

         resultado.innerHTML = "O triângulo é escaleno"


    }





}