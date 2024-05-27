//Crie um trecho de código que me diga quanto cobrar para vender
//um notebook usado: o seu custo foi R$3000, por quanto devo
//vendê-lo descontando 25%?


let valorNotebook = 2500;

let desconto = 0.25;

let valorComDesconto = valorNotebook * desconto;

let precoVenda = valorNotebook - valorComDesconto;

console.log("O preço vendido com desconto: é: R$" + precoVenda.toFixed(2));
