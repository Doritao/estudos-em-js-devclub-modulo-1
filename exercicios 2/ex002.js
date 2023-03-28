// Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO



const pessoas = {
    linnna:  {
        age:29,
        nacionality: 'Brazilian',
        genre: 'fermale'
    },
    marcus: {
        age: 18,
        nacionality: 'Brazilian',
        genre: 'male'
    },
    michaelle: {
        age: 21,
        nacionality: 'Brazlian',
        genre: 'fermale'
    },
    jullie: {
        age: 22,
        nacionality: 'Brazilian',
        genre: 'fermale'
    },
    kayle: {
        age: 25,
        nacionality: 'British',
    }
}


for(let nome in pessoas) {
    for(let a in pessoas[nome]) {
        console.log(`nome: ${pessoas[nome]}\nidade: ${pessoas[nome][a]}`)
    }
}