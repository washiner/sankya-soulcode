//Crie um programa que determina a categoria de uma pessoa
//baseada na idade (criança, adolescente, adulto, idoso).

let idade = 90;

if (idade >= 0 && idade <= 12) {
    console.log("Criança");
} else if (idade > 12 && idade < 18) {
    console.log("Adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
} else if (idade >= 60 || idade > 120) {
    console.log("Idoso");
} else {
    console.log("Idade inválida.");
}
