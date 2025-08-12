// Valor gasto pelo usuario.
// Metodo de pagamento
//   - Dinheiro/Pix = 10% desconto
//   - Credito = Valor total  

let valor = 1000
let met = 1


if(met == 1){
    valor = valor*0.9
    console.log("voce selecionou a opção pix o dinheiro");
    console.log("o valor total com desconto: "+ valor);
}else{

console.log("você selecionou Cartão de credito");
console.log("o valor total é:" + valor);


}