//Crie uma arrow function que receba um array de objetos
//e uma propriedade, e retorne um objeto agrupando
//os elementos por essa propriedade.

const agruparPorPropriedade = (array, propriedade) => {
    const grupos = {};

    array.forEach(objeto => {
        const valorPropriedade = objeto[propriedade];

        if (!grupos[valorPropriedade]) {
            grupos[valorPropriedade] = [];
        }

        grupos[valorPropriedade].push(objeto);
    });

    return grupos;
};

const pessoas = [
    { nome: 'Washiner', cidade: 'Cuiabá' },
    { nome: 'Paulo', cidade: 'Manaus' },
    { nome: 'Ricardo', cidade: 'Minas Gerais' },
    { nome: 'Laura', cidade: 'São Paulo' }
];
const gruposPorCidade = agruparPorPropriedade(pessoas, 'cidade');

console.log("Array de Pessoas:", pessoas);
console.log("Grupos por Cidade:", gruposPorCidade);


