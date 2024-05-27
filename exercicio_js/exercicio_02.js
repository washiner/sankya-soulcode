//Crie um trecho de código que calcula o IMC de uma pessoa.
//Crie uma variável para armazenar o peso em kg e uma para
//armazenar a altura em metros. O cálculo do IMC é: PESO / ALTURA ^ 2;


let peso = 85;
let altura = 1.68;

// Calculando o quadrado da altura
let alturaQuadrado = altura * altura;

// IMC
let imc = peso / alturaQuadrado;

console.log("O IMC é: " + imc.toFixed(2));
