// 1 - exercicio FATORIAL
// let fatorial = 10;
// let valor = 1;

// for (let index = 0; index < fatorial; index += 1) {

//     if( fatorial - index > 0) {
        
//         valor *= (fatorial-index)
        
//     }

// }
// console.log("O FATORIAL DE", fatorial, "É:", valor)



// 2 - palavra ao contrário / invertida

// let word = 'GUSTAVO';
// let novaPalavra = '';
// for (let index = 1; index <= word.length; index += 1) {

//     novaPalavra += word[word.length-[index]]
//     console.log(novaPalavra)
// }
// console.log("A PALAVRA AO CONTRARIO FICA:", novaPalavra)

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

// A MAIOR PALAVRA

// let maiorElemento = 0;
// let nomeElemento;
// //console.log(array[0].length) - quantidade de caracteres dentro de um elemento no array

// for (let index = 0; index < array.length; index += 1) {

//     if(array[index].length > maiorElemento) {
        
//         maiorElemento = array[index].length
//         nomeElemento = array[index]
//         //console.log(maiorElemento)
//     }
    

// }

// console.log(nomeElemento)

// A MENOR PALAVRA

// let menorPalavra = array[0].length;
// let nomeMenor;

// for (index = 0; index < array.length; index += 1) {

//     if(array[index].length < menorPalavra) {
//         menorPalavra = array[index].length
//         nomeMenor = array[index]
        

//     }

// }
// console.log(nomeMenor)

// 4 - Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numbers = 50;
let count = 0;

for (let index = 2; index <= numbers; index += 1) {

    if(index % 2 === 1) {
        count += 1
        console.log(count)
    }

}