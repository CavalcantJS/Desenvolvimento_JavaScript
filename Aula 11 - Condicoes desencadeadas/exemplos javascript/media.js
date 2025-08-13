let nota1 = 30
let nota2 = 30

let media = (nota1 + nota2)/2

if (media >= 70){

    console.log("Aprovado")
} else if(media >= 50){

    console.log("Recuperação");
    let rec = 90
    media= media+rec

    if (media >= 50){

        console.log("Aprovado")
      
    } else {
        
        console.log("Reprovado");
    }

}else{

    console.log("Reprovado");
    
}