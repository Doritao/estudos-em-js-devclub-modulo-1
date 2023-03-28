// Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"



let n = 11


console.log(`o numero ${n} ${comparar(n)} 10`)

function comparar(n) {
    if( n > 10) {
        return '>'
    } else if (n < 10) {
        return '<'
    } else {
        return '='
    }
}
