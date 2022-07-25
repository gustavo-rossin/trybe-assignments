// OBJETOS

// let name = 'Milton';
// let lastName = 'Nascimento';
// let nickname = 'Bituca';
// let age = 77;
// let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

// // TRANSFORMAR EM OBJETO

// let singer = {
//     name: 'Milton',
//     lastName: 'Nascimento',
//     nickname: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
//     bornInfo: {
//         city: 'Cidade Maravilhosa',
//         state: 'RJ'
//     } 
// };

// singer['fullName'] = singer.name + ' ' + singer.lastName

// console.log('O cantor ' + singer.name +' '+ singer.lastName + ' possui ' + singer.age + ' anos.'); 

// console.log('O cantor ' + singer['name'] +' '+ singer['lastName'] + ' possui ' + singer['age'] + ' anos.'); 

// console.table(singer);

// console.log('o cantor ' + singer.fullName + 'nasceu no estado do ' + singer.bornInfo.state + ' e na ' + singer.bornInfo.city)

/////////////

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     //diasDaSemana.1; // SyntaxError: Unexpected number
//     console.log(diasDaSemana['1']); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// EXEMPLO 1:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// }

// fullName = player['name'] + ' ' + player['lastName']

// console.log("A jogadora " + fullName + " tem " + player.age + " anos de idade.")

// console.log("A jogadora " + fullName + " foi eleita a melhor do mundo " + player.bestInTheWorld.length + " vezes." )

// console.log("A jogadora " + fullName + " tem medalhas de ouro: " + player.medals.golden + " Prata: " + player.medals.silver )






// FOR IN e FOR OF

//pedidos de pizza

// let pizzas = {
//     sabor: "Palmito",
//     preco: 39.90,
//     bordaCatupiry: true
// };

// for (let key in pizzas) {
//     console.log(key,pizzas[key])
// }

// let pizzasDoces = ['chocolate', 'banana', 'morango']

// for (let key in pizzasDoces) {
//     console.log(key, pizzasDoces[key])
// }

// // EXEMPLOS

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(index);
// }

// DIFERENÇA ENTRE FOR IN E FOR OF: 
// FOR IN - percorre os índices dos arrays e das chaves
// FOR OF - percorre os objetos iteráveis dos arrays

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let key in names) {
//     console.log("Olá ", names[key])
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//     console.log(key,car[key])
//   }



// FUNCOES

// function greetingsMessage(name) {
//     return console.log("Seja bem vindo, " + name);
//   }

// greetingsMessage('Gustavo')

function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2));
  