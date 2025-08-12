function mostrarResultado(){

    let valorGasto = parseInt(document.getElementById("valorGasto").value)
    let metodoPagamento = document.getElementById("metodoPagamento").value
    let resultado = document.querySelector("#resultado")



    if(metodoPagamento =="1"){

    valorGasto = valorGasto * 0.9


    resultado.innerHTML = "O valor final foi de: R$"+ valorGasto

    }else{

         resultado.innerHTML = "O valor final foi de: R$"+ valorGasto

    }


}