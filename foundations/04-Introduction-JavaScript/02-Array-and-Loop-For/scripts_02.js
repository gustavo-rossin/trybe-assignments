// // let pizza1 = '4 queijos';
// // let pizza2 = 'Frango com catupiry';
// // let pizza3 = 'marguerita';
// // let pizza4 = 'palmito';
// // let pizza5 = 'chocolate';

// // const cardapio = [pizza1, pizza2, pizza3, pizza4, pizza5];

// // console.log(cardapio);

// // let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];

// // // pizzas[4] = 'banana'; // se colocado no mesmo índice de alguma outra variável, substitui o valor.
// // // //pizzas[5] = 'calabresa'; // se colocado um valor acima, adiciona.
// //  pizzas.push('portuguesa'); // adiciona uma nova variável no final do array.


// // // console.log(pizzas, pizzas.length, pizzas.sort())

// // // for (valor-inicial; condição-de-parada; incremento) {}

// // for (index = 0; index < pizzas.length; index += 1){
// //     console.log(pizzas[index])
// // }

// // //Exemplo padaria
 
// // let access = true;
// // const paes = 10;
// // let sacola = "";
// // if (access === true) {

// //     for (let index = 1; index <= paes; index += 1) {
// //         sacola = index;
// //         console.log('Quantidade de pães:', sacola)
// //     }

// // }

// // else {
// //     console.log('Erro! Acesso negado')
// // }

// // let testee = 22;

// // console.log(testee.length)

// //EXEMPLOS DE ADIÇAO E REMOÇAO DE ELEMENTO DENTRO DE ARRAY
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// //.push - adiciona no ultimo elemento
// tasksList.push('Deitar');
// console.log("PUSH = ", tasksList);

// //.unshift - adiciona no primeiro elemento
// tasksList.unshift('Comer');
// console.log("UNSHIFT = ", tasksList);

// //.pop - retira o último elemento
// tasksList.pop();
// console.log('POP = ', tasksList);
// //.shift - retira o primeiro elemento
// tasksList.shift();
// console.log("SHIFT = ", tasksList);

// //.indexOf - posição do elemento dentro do array
// console.log(tasksList.indexOf('Reunião'))

// //EX 1
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf('Serviços');

// console.log(menuServices);

// //EX 2
// let menus = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menus.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// //EX 3


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push("Contato");

// console.log(menu);

// FOR
// for (valor-inicial; condição-de-parada; incremento) {fórmula}

// let numeroTabuada = 3;
// let soma = 0;
// for (let i = 1; i <= 3; i +=1) {
//     tabuada = numeroTabuada * i
//     soma = soma + tabuada
//     console.log(tabuada)
// }
// console.log(soma)

// //EXERCIO carros

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (i = 0; i < cars.length; i += 1) {

//     console.log("Tenho carro da marca:", cars[i])

// }

// EXERCICIO lista de compras

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (count = 0; count < groceryList.length; count += 1) {
//     console.log("Lista de compras:", groceryList[count])
// }


// FOR/OF

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let nomes of names) {
//     console.log(nomes)
// }

// WHILE


// let counter = 0;

// while(counter !== 5) {
//   counter += 1; // counter = counter + 1
//   console.log(counter)
// }

//EXERCICIOS FIXAÇÃO

// const jogos = 'Warcraft'

// console.log(jogos[jogos.length-1]) // fazer a palavra ir de trás para frente.

const jogos = ['Doom', 'Skyrim', 'Final Fantasy'];
jogos[0] = 'Warcraft III';
console.log(jogos)

for(let index = 0; index < 10; index+=1 ){
    console.log(index);
  }
  