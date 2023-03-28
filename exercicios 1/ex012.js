// Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão
// Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números,
//  e ele imprime se o primeiro número é maior que o segundo. 
//  Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, 
// e ele imprime se o primeiro número é menor que o segundo.
//  Ex: 2 e 5. Imprime: true.




var n1 = 33; //dividendo da primeira divisao
var n2 = 95; //dividendo da segunda divisao
var n3 = 7; //divisor da primeira divisao 
var n4 = 8;//divisor da segunda divisao
function divisao(n1, n2, n3, n4) {
    var ResultadoPrimDivisao = n1 % n3;
    var ResultadoSegDivisao = n2 % n4;
    console.log(`Resultado da primeria divisao é ${ResultadoPrimDivisao}   \/\/lembrando que ele so pega o resto da divisao`)
    console.log(`Resultado da segunda divisao é ${ResultadoSegDivisao} \/\/ lembrando que ele so pega o resto da divisao`)
    console.log(`o primeiro numero e maior que o segundo?:\n resposta é ${maior(ResultadoPrimDivisao, ResultadoSegDivisao)}`)
    var x = maior(ResultadoPrimDivisao, ResultadoSegDivisao)
    console.log(`o segundo número é maior que o primeiro numero????:\n resposta:${x ? false : true}`)

}
divisao(n1,n2,n3,n4)

function maior(a, b) {
    if (a == b) {
        return `Não.eles tem o mesmo valor`
    } else {
        if (a > b) {
            return true;
        } else {
            return false;
        }
    }

}








/*
var n1 = 33
var n2 = 63

if(ChecarNumeroImpar(n1) == true & ChecarNumeroImpar(n2) == true) {
    console.log(`Você digitou todos os números ímpares...`)
    var calc = n1%n2;
    var calc2 = n2%n1;
    console.log(`O resto da divisão de ${n1}/${n2} é ${calc}\nO resto da divisão entre ${n2}/${n1} é ${calc2}`)
} else {
    console.log(`você **deve** digitar todos os números ímpares.`)
}


function ChecarNumeroImpar(n) {
    var divide = n / 2;
    var resultado = divide % 2 == 0 ? 'Par' : 'Impar';
    if(resultado == 'Impar') {
        return true
    } else {
        return false
    }
}
*/
