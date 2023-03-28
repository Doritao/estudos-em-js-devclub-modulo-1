// Faça um programa onde ele leia 4 números.
//  Em cada caso, ele deve retornar a mensagem condizente:
//   - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - 
//   Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
//   Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.





let array = [2, 6, 8, 0, 100]
let pares = []
let impares = []

for (let i = 0; i < array.length; i++) {
    checkPar(array[i]) ? pares.push(array[i]) : impares.push(array[i]);
}

if(pares.length == array.length) {
    console.log(`Todos os números são pares`)
    console.log(pares);
} else if(impares.length == array.length) {
    console.log(`todos os numeros sao impares`)
    console.log(impares);
} else {
    console.log(`temos numeros impares e pares`)
    console.log(`pares ${pares}`)
    console.log(`impares ${impares}`)
}

function checkPar(n) {
   
    return n % 2 == 0;
}