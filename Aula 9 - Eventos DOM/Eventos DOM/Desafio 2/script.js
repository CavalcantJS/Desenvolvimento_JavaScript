function mostrarResultado(){
    let nota1 = parseInt(document.getElementById("nota1").value)
    let resultado = document.querySelector("#resultado")
    let dobro= nota1*2
    let triplo = nota1*3

    let rad = Math.sqrt(nota1)

    resultado.innerHTML = "o dobro de "+ nota1+ " é: "+ dobro+ " o triplo é "+ triplo+ " e a raiz quadrada é "+ rad.toFixed(2)
}