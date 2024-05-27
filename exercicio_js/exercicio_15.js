// Número aleatório que o pc escolheu entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Fornecer um palpite
let palpite = 91;

// Converter o palpite em número inteiro
palpite = parseInt(palpite);

// Verifica se o palpite é igual ao número secreto
if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto}!`);
} else if (palpite < numeroSecreto) {
    console.log("O número é maior!");
} else {
    console.log("O número é menor!");
}
