// 1 - Pix
// 2 - Crédito
// 3- Débito    
    // 1 - Parcela - normal
    // 2 - Parcela - 5% juros
    // 3 - Parcela - 10% juros


let valorGasto = 1000
let metodoPagamento = 2
let parcela = 3

if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    console.log("O valor final foi de R$ " + valorFinal);
}else if(metodoPagamento == 2){
    if (parcela == 1) {
        console.log("O valor final foi de R$" + valorGasto);
    } else if (parcela == 2) {
        let parcela = valorGasto * 1.05
            console.log("O valor final foi de R$" + parcela);
    } else {
        let parcela = valorGasto * 1.1
            console.log("O valor final foi de R$" + parcela);

    }
    
} else if(metodoPagamento ==3){
     let valorFinal = valorGasto * 0.95
    console.log("MÉTODO DE PAGAMENTO DÉBITO")
    console.log("O valor final foi de R$ " + valorFinal);



}else {
    console.log("ESCOLHA UMA OPÇÃO VÁLIDA")
    
}



