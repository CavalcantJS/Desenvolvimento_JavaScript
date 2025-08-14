function mostrarResultado(){
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)
    let operador = document.querySelector("#operador").value
    let resultado = document.querySelector("#resultado")

 if(operador === "1"){

    valor = num1 + num2 
    resultado.innerHTML = valor

 } else if(operador === "2"){
    
    valor = num1 - num2 
    resultado.innerHTML = valor

 }else if(operador === "3"){
    
    valor = num1 * num2
    resultado.innerHTML = valor

 }else if(operador === "4"){
    
    valor = num1 / num2
    resultado.innerHTML = valor

 } 

}
