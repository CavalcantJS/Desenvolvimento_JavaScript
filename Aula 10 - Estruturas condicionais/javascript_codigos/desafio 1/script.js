function mostrarResultado(){

    let velocidade = parseInt(document.getElementById("velocidade").value)
    
    let resultado = document.querySelector("#resultado")



    if (isNaN(velocidade)){
        resultado.innerHTML = "escreva um valor válido"
        return
    }

    if(velocidade > 80){

    velocidade = (velocidade - 80) * 7

    resultado.innerHTML = "Você foi multado em:"+ velocidade + "R$"

    }else{

         resultado.innerHTML = "Você não tem pendências"

    }


}