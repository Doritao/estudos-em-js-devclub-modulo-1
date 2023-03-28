// // Faça um programa que gere um número aleatório entre 1 e 10, 
// esse número é o número 'ganhador'. Então ele também irá gerar um 
// número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
//  Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.


let seuNumero = 1

console.log(gerar(seuNumero)? 'você acertou o número aleatorio parabens' : 'vc nao acertou o numero aleatorio')
console.log(`vc digitou ${seuNumero}`)


function gerar(seuNumero) {
    let min = 1
    let max = 10
    if(seuNumero >= min) {
        let randomnumber = Math.floor(Math.random() * (max - min) + min)
        if(randomnumber == seuNumero) {
            console.log(`numero sorteado foi ${randomnumber}`)
            return true;
        } else {
            console.log(`numero sorteado foi ${randomnumber}`)
            return false
        }
    } else return

}