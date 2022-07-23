

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log("Imprimindo o número:", numbers[index])
// }

// 2 && 3 && 4

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {

//     soma += numbers[index] // soma = soma + index
//     //console.log("Imprimindo o número:", soma)
// }
// let mediaAritmetica = soma/numbers.length;
// console.log("total de elementos no array:",numbers.length)
// console.log("soma total:",soma)
// console.log("média aritmética:",mediaAritmetica)

// if (mediaAritmetica > 20) {
//     console.log("Valor superior a 20.")
// }

// else {
//     console.log("valor inferior a 20.")
// }

// 5

// let maior = 0;

// for (let index = 0; index < numbers.length; index += 1) {

//    if (numbers[index] > maior) {
//         maior = numbers[index]
//    }
//    //console.log(maior)

// }

// console.log(maior)

// // 6

// let numerosImpares = 0;

// for (i = 0; i < numbers.length; i += 1) {

//     if(numbers[i]%2 === 1) {
//         numerosImpares += 1
//         console.log(numbers[i])
//     }

// }
// console.log("Total de números ímpares:",numerosImpares)

// 7

// menorValor = 10000;

// for (i=0; i<numbers.length; i+=1) {
//     if(numbers[i] < menorValor) {
//         menorValor = numbers[i]
//         console.log(menorValor)
//     }
// }

// console.log(menorValor)

// 8 && 9

valorAdicionado = 0;
valorArray = [];
divisao = [];

for (index = 1; index <= 25; index += 1) {
    valorAdicionado += 1
    valorArray.push(valorAdicionado)
    //console.log(valorArray)
    
}
console.log(valorArray)

for (c = 0; c < valorArray.length; c += 1) {
    divisao.push(valorArray[c]/2)
    //console.log(divisao) 

}
console.log(divisao) 