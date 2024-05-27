//Desenvolva um programa que calcula o valor 
//final após aplicar um desconto a um determinado preço.

let precoNormal = 100;
let desconto = 10;

let valorDesconto = (precoNormal * desconto) / 100;

let valorFinal = precoNormal - valorDesconto;


console.log("O preço original é R$ " + precoNormal.toFixed(2));
console.log("O valor do desconto é R$ " + valorDesconto.toFixed(2));
console.log("O preço final após aplicar o desconto é R$ " + valorFinal.toFixed(2));
