// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Credito = Valor total  


let valorGasto = 1000
let metodoPagamento = 1


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    console.log("O valor final foi de R$ " + valorFinal);
}else if(metodoPagamento == 2){
    console.log("MÉTODO DE PAGAMENTO CRÉDTIO")
    console.log("O valor final foi de R$" + valorGasto);


} else if(metodoPagamento ==3){
     let valorFinal = valorGasto * 0.5
    console.log("MÉTODO DE PAGAMENTO CRÉDITO")
    console.log("O valor final foi de R$ " + valorFinal);

}else {
    console.log("ESCOLHA UMA OPÇÃO VÁLIDA")
    return
}
