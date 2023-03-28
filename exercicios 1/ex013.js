// // Crie um programa que mostra o tamanho do Array. 
// Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3


let array = [0,0,0,0,0,0,0,0,0,0,0,0]
console.log(`o tamanho do array é ${array.length}`)
array.shift()
console.log(`após remover 1 item o tamanho dele é ${array.length}`)
array.push(0,0)
console.log(`após adicionar um item seria ${array.length}`)