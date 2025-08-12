function mostrarResultado(){

    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let paragrafomedia = document.querySelector("#media")
    let paragraforesultado = document.querySelector("#resultado")

     media = (nota1 + nota2)/2
    paragrafomedia.innerHTML = "A sua media foi:"+ media

    if(media>= 6){
        paragraforesultado.innerHTML = "Aprovado"
        paragraforesultado.style.color = "blue"

    }else{
         paragraforesultado.innerHTML = "Reprovado"
        paragraforesultado.style.color = "Red"

    }



}