//simples
//composta
//encadeado

let idade = 17;
if(idade >=0 && idade <=12){
    console.log("Criança");
}else if(idade >12 && idade <18){
    console.log("Adolocente");

}else if(idade >=18 && idade <60){
    console.log("Adulto")
}else if(idade >= 60 && idade <= 120){
    console.log("idoso");
}else{
    console.log("Idade invalida");
}

console.log(
    idade >=18 ? "Maior" : "Menor"
);

let a = true;
let b = false;

let resultado = (a && !b) || (!a && b);

// bitwise xor
//let x = 5; //0101
//let y = 3; //0011
//let resposta = x ˆ y; //0110 =6
   let dia = 2;
    switch(dia){
        case 1: console.log("Doming");
        break;
        case 2: console.log("Segunda");
        break;
        case 3: console.log("terça");
        break;
        default: console.log("Dia nao existe");
    }