//programa ira gerar 3 numeros inteiros aleatorios e verificar qual e maior
//colocar eles em ordem decrescente

//ele vai gerar um num aleatorio entre 1 e 100
let array = []
while (array.length != 3) {
    array.push(Math.floor(Math.random() * (100 - 1) + 1))
}

let max = array[0]
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}

array.sort(function(a, b) {
    return b - a
})

console.log("O maior número é:", max)
console.log("Números em ordem decrescente:", array.join(" > "))