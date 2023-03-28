// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa 
// deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados 
// vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve 
// conter uma mensagem diferente.




const pessoas = {
    linnna: {
        age: 13,
        nationality: 'Brazilian',
        genre: 'female'
    },
    marcus: {
        age: 15,
        nationality: 'British',
        genre: 'male'
    },
    michaelle: {
        age: 21,
        nationality: 'Brazilian',
        genre: 'female'
    },
    jullie: {
        age: 22,
        nationality: 'Brazilian',
        genre: 'female'
    },
    kayle: {
        age: 25,
        nationality: 'British',
        genre: 'female'
    }
};

for (let nomes in pessoas) {
    if (pessoas[nomes].age >= 18 && pessoas[nomes].nationality == 'Brazilian') {
        console.log(`A pessoa ${nomes} com idade ${pessoas[nomes].age} foi aprovada.`);
    } else {
        console.log(`A pessoa ${nomes} com idade ${pessoas[nomes].age} foi reprovada.`);
    }
}
