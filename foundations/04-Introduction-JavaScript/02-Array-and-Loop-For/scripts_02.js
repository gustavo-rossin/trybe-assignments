// let pizza1 = '4 queijos';
// let pizza2 = 'Frango com catupiry';
// let pizza3 = 'marguerita';
// let pizza4 = 'palmito';
// let pizza5 = 'chocolate';

// const cardapio = [pizza1, pizza2, pizza3, pizza4, pizza5];

// console.log(cardapio);

// let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];

// // pizzas[4] = 'banana'; // se colocado no mesmo índice de alguma outra variável, substitui o valor.
// // //pizzas[5] = 'calabresa'; // se colocado um valor acima, adiciona.
//  pizzas.push('portuguesa'); // adiciona uma nova variável no final do array.


// // console.log(pizzas, pizzas.length, pizzas.sort())

// // for (valor-inicial; condição-de-parada; incremento) {}

// for (index = 0; index < pizzas.length; index += 1){
//     console.log(pizzas[index])
// }

//Exemplo padaria
let access = true;
const paes = 10;
let sacola = "";
if (access === true) {

    for (let index = 1; index <= paes; index += 1) {
        sacola = index;
        console.log('Quantidade de pães:', sacola)
    }

}

else {
    console.log('Erro! Acesso negado')
}

let testee = 22;

console.log(testee.length)