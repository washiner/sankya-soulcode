//Desenvolva um programa que simula um sistema de empréstimo,
//determinando se um cliente é elegível com base na renda,
//idade e histórico de crédito.

// Critérios para ser elegivel
let idadeMin = 18;
let idadeMax = 65;
let rendaMin = 3500;
let historicoCredito = "regular";

//dados do cliente atual
let idade = 44;
let renda = 3900;
let historicoCliente = "regular";

// Verificar se cliente é elegivel

let resultado;

if (idade < idadeMin || idade > idadeMax) {
    resultado = "Idade não elegível. A idade deve estar entre " + idadeMin + " e " + idadeMax + " anos.";
} else if (renda < rendaMin) {
    resultado = "Renda não elegível. A renda mínima deve ser de R$ " + rendaMin + ".";
} else if (historicoCliente.toLowerCase() !== historicoCredito) {
    resultado = "Histórico de crédito não elegível. O histórico deve ser 'bom'.";
} else {
    resultado = "Parabéns! Você é elegível para o empréstimo.";
}

console.log(resultado);