/*Faça um programa que imprima na tela se um nome é igual ao outro nome 
digitado. Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. 
João e João, imprime true. João e Maria, imprime false.
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em um objeto. 
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. 
João e João, imprime true. João e Maria, imprime false.*/


const objeto1 = {
    nome: "Linna"
}
const objeto2 = {
    nome: "Harry"
}

console.log(objeto1.nome == objeto2.nome)

//
const nomes = {
    firstName: "Linna",
    seconndName: "Linna"    
}
console.log(nomes.firstName == nomes.seconndName)