//Crie um programa que verifica se três segmentos formam 
//um triângulo e, se sim, determina seu tipo
//(equilátero, isósceles, escaleno).

// Escolha os comprimentos dos três lados
let ladoA = 10;
let ladoB = 15;
let ladoC = 22;

// OS segmentos podem formar um triângulo?
let formaTriangulo = (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);

if (formaTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("triângulo isósceles.");
    } else {
        console.log("triângulo escaleno.");
    }
} else {
    console.log("Os lados não formam um triângulo.");
}
