function mostrarResultado(){

    let num = parseInt(document.getElementById("numero").value)
    let resultado = document.getElementById("resultado")
    

    for (let i = 0; i <= 10; i++){
        
        resultado.innerHTML += ` <br>${num} X ${i} = ${num *i}`

}

}