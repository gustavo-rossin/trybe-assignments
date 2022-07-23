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

// //Exemplo padaria
// let access = true;
// const paes = 10;
// let sacola = "";
// if (access === true) {

//     for (let index = 1; index <= paes; index += 1) {
//         sacola = index;
//         console.log('Quantidade de pães:', sacola)
//     }

// }

// else {
//     console.log('Erro! Acesso negado')
// }

// let testee = 22;

// console.log(testee.length)

//EXEMPLOS DE ADIÇAO E REMOÇAO DE ELEMENTO DENTRO DE ARRAY
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//.push - adiciona no ultimo elemento
tasksList.push('Deitar');
console.log("PUSH = ", tasksList);

//.unshift - adiciona no primeiro elemento
tasksList.unshift('Comer');
console.log("UNSHIFT = ", tasksList);

//.pop - retira o último elemento
tasksList.pop();
console.log('POP = ', tasksList);
//.shift - retira o primeiro elemento
tasksList.shift();
console.log("SHIFT = ", tasksList);

//.indexOf - posição do elemento dentro do array
console.log(tasksList.indexOf('Reunião'))

//EX 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

//EX 2
let menus = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menus.indexOf('Portfólio');

console.log(indexOfPortfolio);

//EX 3


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");

console.log(menu);