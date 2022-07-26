// PART 1 - OBJECTS && FOR/IN

// EX 1 && 2 && 3 && 4
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log("Bem-vinda,", info.personagem)

// info['recorrente'] = 'Sim';

// console.log(info)

// for (let key in info) {
//     console.log(key)
// }

// for (let key in info) {
//     console.log(info[key])
// }

// EX 6 && 7 && 8

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// console.log("O livro favorito de", leitor.nome, leitor.sobrenome,"se chama",leitor['livrosFavoritos'][0]['titulo'])

// leitor['livrosFavoritos'][1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

//   console.log(leitor)

// console.log("Julia tem", leitor.livrosFavoritos.length, "livros favoritos")

// PART 2 - FUNCTIONS

// EX 1 Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function isPalindrome(str) {
//     if(str === str.split('').reverse().join('')) {

//        return console.log("A palavra", str, "é palindromo")

//     }

//     else {

//         return console.log("A palavra", str, "não é palindromo")

//     }
// }

// isPalindrome("ovo")

// EX 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


// let arrayTeste = [2, 3, 6, 7, 10, 1];
// console.log(arrayTeste.indexOf(10))

function arrayTeste(array) {
  let inteiro = 0;

  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > inteiro) {
      inteiro = index;
    
    }
  }

 return inteiro 
}
console.log(arrayTeste([2, 3, 6, 7, 10, 1]));

// EX 3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor(menor) {
  pequeno = menor[0]
  
  for (let i = 0; i < menor.length; i += 1) {

    if(menor[i] < pequeno) {
      pequeno = i
    }
  }
  return pequeno
  }

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

// EX 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.


function moreChar(char) {
  let unit = char[0];
  for (let count = 0; count < char.length; count += 1) {

    if(char[count].length > unit.length) {
      unit = char[count]
    }

  }
return unit
}
console.log(moreChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))



// EX 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numeroRepetido(numero) {
let contagemRepetido = 0;
let contagemNumero = 0;
let indexNumero = 0;

for (let index in numero) {
  let verificaNumero = numero[index];
  for (let index2 in numero) {
    if (verificaNumero === numero[index2]) {
      contagemNumero += 1;
    }
  }

  if (contagemNumero > contagemRepetido) {
    contagemRepetido = contagemNumero;
    indexNumero = index
  }
  contagemNumero = 0
}

return numero[indexNumero]

}
console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3]))




