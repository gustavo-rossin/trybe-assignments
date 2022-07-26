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

// EX 1

// function isPalindrome(str) {
//     if(str === str.split('').reverse().join('')) {

//        return console.log("A palavra", str, "é palindromo")

//     }

//     else {

//         return console.log("A palavra", str, "não é palindromo")

//     }
// }

// isPalindrome("ovo")

// EX 2
// let arrayTeste = [2, 3, 6, 7, 10, 1];
// console.log(arrayTeste.indexOf(10))

function arrayTeste(array) {
  let inteiro = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > inteiro) {
    (inteiro = array[index]);
    return console.log(inteiro)
    }
  }
return console.log(inteiro);
}
console.log(arrayTeste([2, 3, 6, 7, 10, 1]));