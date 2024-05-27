//3. Calculadora Simples:   - Implemente uma calculadora
//que recebe dois números e uma operação (adição, subtração,
//multiplicação, divisão) e retorna o resultado.


let numero1 = 8;
let numero2 = 6;
let operacao = "subtração"; 

let resultado;
switch (operacao) {
    case "adição":
        resultado = numero1 + numero2;
        break;
    case "subtração":
        resultado = numero1 - numero2;
        break;
    case "multiplicação":
        resultado = numero1 * numero2;
        break;
    case "divisão":
        resultado = numero1 / numero2;
        break;
    default:
        console.log("Operação inválida.");
}

console.log(operacao + " é: " + resultado);

