// Faça um programa onde leia um número e diga se ele é:
//  - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.




let Num = 15;
if (Num % 2 == 0) {
    console.log(`${Num} é par`)
} else {
    console.log(`${Num} é ímpar`)
}

function Primo(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}


function Div5(Num) {
    if(Num%5 == 0) {
        return true
    } else {
        return false;
    }
}

console.log(`${Num} é ${Primo(Num)? 'primo' : 'nao e primo'}`)
console.log(`${Num} ${Div5(Num)? 'é divisivel por 5' : "nao é divisivel por 5"}`)








// function ehPrimo(num) {
//     if (num < 2) { // Verifica se o número é menor que 2, pois números menores que 2 não são primos.
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) { // Itera de 2 até a raiz quadrada do número.
//       if (num % i === 0) { // Se o número for divisível por algum número dentro do intervalo, ele não é primo.
//         return false;
//       }
//     }
//     return true; // Se o número não for divisível por nenhum número dentro do intervalo, ele é primo.
//   }