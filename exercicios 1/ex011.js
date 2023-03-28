// Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }



  function ObterRandomNumber(min,max) {
    return Math.random() * (max - min) + min
  }

  function RandomNumberinteiro(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

console.log(ObterRandomNumber(1,100))
console.log(RandomNumberinteiro(1,100))