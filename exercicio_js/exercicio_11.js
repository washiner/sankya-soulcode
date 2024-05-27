//Escreva um programa que converte notas numéricas em
//conceitos (A, B, C, D, F) baseado em um sistema de pontuação.


let nota = 15; // valor da nota

let conceito;

switch (true) {
    case (nota >= 90):
        conceito = "A";
        break;
    case (nota >= 80):
        conceito = "B";
        break;
    case (nota >= 70):
        conceito = "C";
        break;
    case (nota >= 60):
        conceito = "D";
        break;
    default:
        conceito = "F";
}

console.log("Sua nota" + nota + ", o conceito é: " + conceito);
