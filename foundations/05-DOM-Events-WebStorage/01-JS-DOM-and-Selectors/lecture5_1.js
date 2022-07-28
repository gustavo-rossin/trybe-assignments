// VID 1

// document.getElementById("id-tag")

//innerHTML retorna todo o texto (incluindo tags) dentro getElement.
//innerText - igual HTML, porém sem as tags.
//style - retorna todo os estilos utilizados na tag.
// alterações no InnerText no JS altera permanentemente na página.
// document.getElementById("teste").innerText = "Aprendizados";

// VID 2

//document.getElementsByClassName 

// let pilotosDeF1 = document.getElementsByClassName("piloto-f1-atual");

// for (let i = 0; i < pilotosDeF1.length; i += 1) {
//     pilotosDeF1[i].innerText = "Lewis Hamilton" --- Troca todos os nomes de piloto na classe "piloto-f1-atual" para "Lewis Hamilton"
// }

// VID 3

// document.getElementsByTagName - ele retorna as informações em formato de lista dos elementos (por exemplo: document.getElementsByTagName("div"))

// para acessar o elemento: document.getElementsByTagName("span")[0].innerText = "Carlos Sainz" 

// VID 4

// document.querySelector("p") - traz a primeira informação na lista, por isso temos que usar os seletores de classe e ID.

// document.querySelector(".pilotos-sem-titulo p")

// VID 5

// PARA RETORNAR VARIOS ELEMENTOS NO .querySelector, devemos utilizar o document.querySelectorAll:

// document.querySelectorAll(".pilotos-sem-titulo p")[0].innerText = "ARROZ" - retorna uma lista de array.

// Exemplo 3

document.getElementById("header-container").style.color = "white";
document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "orange";

document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = "purple"
document.querySelectorAll(".emergency-tasks h3")[0].style.color = "white"
document.querySelectorAll(".emergency-tasks h3")[1].style.backgroundColor = "purple"
document.querySelectorAll(".emergency-tasks h3")[1].style.color = "white"
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = "black"
document.querySelectorAll(".no-emergency-tasks h3")[0].style.color = "white"
document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = "black"
document.querySelectorAll(".no-emergency-tasks h3")[1].style.color = "white"
document.getElementById("footer-container").style.backgroundColor = "black";


// emergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");
// for (let i in emergencyTasksH3) {
//     emergencyTasksH3[i].style.backgroundColor = "purple"
//     emergencyTasksH3[i].style.colorolor = "blue"

// }







