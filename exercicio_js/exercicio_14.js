//Implemente um programa que verifica se um ano é bissexto ou não.

let ano = 2024;

//Verificar se o ano é bissexto
let Bissexto;
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    Bissexto = true;
} else {
    Bissexto = false;
}

if (Bissexto) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
