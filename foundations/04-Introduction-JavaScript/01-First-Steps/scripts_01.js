// // Variáveis e Constantes

// const myName = "Gustavo";
// const birthCity = "Campinas";
// let birthYear = 20322;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// // TEM QUE SALVAR ANTES DE DAR O RUN CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // Tipos primitivos, tipagem dinâmica e operações aritméticas


// let movie = "Avengers"; //string literal
// let score = 10.91; //number literal
// let isValid = true; //boolean
// let name; // undefined
// let color = null; // redefinição de valor

// console.log(movie, score, isValid, name, color)


// // CONTAS ARITMÉTICAS +, -, *, /, **

// salary = 3500;

// // console.log(salary + salary);
// // console.log(salary - salary);
// // console.log(salary / salary);
// // console.log(2 * 200);
// // console.log(3 ** 3);

// salary++; //ENCREMENTAR (++) EM 1 OU DECREMENTAR (--) EM 1.

// console.log(salary)


// PARTE EXERCICIOS DA AULA

// tipos de variáveis

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

// tipos de aritmetica

// let base = 5;
// let height = 8;
// const area = base*height;
// const perimeter = base*2 + height*2


// console.log(area);
// console.log(perimeter);

// IF e ELSE

// let trybe = 14;

// if(trybe >= 14 && trybe < 14.40) {
//     console.log("esquenta");
// }
// else if(trybe >= 16.30 && trybe < 17.50) {
//     console.log("Aula ao vivo");
// }
// else if (trybe >= 19.40 && trybe < 20) {
//     console.log("Fechamento");
// }
// else {
//     console.log("fora dos momentos síncronos");
// }

//EXERCICIO IF E ELSE

const grade = 60;

if (grade >= 80) {
    console.log("Aprovado, parabéns!");
}

else if (grade >= 60 && grade < 80) {
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovado");
}