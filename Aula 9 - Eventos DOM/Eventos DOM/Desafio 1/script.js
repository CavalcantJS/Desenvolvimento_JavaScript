function mostrarResultado(){
    let nota1 = parseInt(document.getElementById("nota1").value)
    let ant = nota1 - 1
    let suc = nota1 + 1
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "o antecessor de " + nota1 + " é: " + ant + " e seu sucessor é: " + suc 

}