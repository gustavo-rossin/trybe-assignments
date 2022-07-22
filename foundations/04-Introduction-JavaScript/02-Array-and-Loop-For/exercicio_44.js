// // 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.

let soma = 0;

for (let index = 1; index <= 51; index += 1) {
    soma = soma + index;
}
console.log(soma)

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let counter = 0;

for (let index = 2; index <= 150; index += 1) {
    if (index%3 === 0) {
        counter += 1
        console.log(counter)
    }
}

if (counter === 50) {
    console.log("Exiba uma mensagem secreta")
}

// 3 - Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

let pessoaX = 22;
let pessoaY = 23;
let pessoaZ = 24;

if(pessoaX < pessoaY && pessoaX < pessoaZ ) {
    console.log("A pessoa X é a mais nova");
}

else if (pessoaY < pessoaX && pessoaY < pessoaZ) {
 console.log("A pessoaY é a mais nova")
}

else {
    console.log("A pessoaZ é a mais nova")
}