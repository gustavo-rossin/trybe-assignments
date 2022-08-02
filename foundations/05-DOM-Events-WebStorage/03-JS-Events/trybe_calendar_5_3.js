function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth () {
  let getDaysList = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
  } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
  }
}
}
createDaysOfTheMonth()

// 2

function holidaysButton (buttonName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday'
  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonsContainer.appendChild(newButton);

}

holidaysButton('Holidays')

// 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays()

// 4

function fridaysButton(fridays) {
  let fridayButton = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  let newFridayButtonId = 'btn-friday'
  fridayButton.innerHTML = fridays
  fridayButton.id = newFridayButtonId
  buttonsContainer.appendChild(fridayButton)


}
fridaysButton('Fridays')

// 5
function displayBeer (fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday')
  let newWord = "BEER DAY"

  getFridayButton.addEventListener('click', function () {
    for (let index = 0; index < getFridays.length; index += 1) {
      if(getFridays[index].innerHTML !== newWord) {
        getFridays[index].innerHTML = newWord
      } else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayBeer(decemberFridays);

// 6
function dayMouseOver() {
  days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600px';
  })
}

function dayMouseOut() {
  days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200px';
  })
}
dayMouseOver()
dayMouseOut()

// 7
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks'); // armazena o elemento com classe igual a 'my-tasks'
  let taskName = document.createElement('span'); // armazena a criação de um elemento do tipo 'span'

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName) // Anexando a task como filha de taskContainer
}

newTaskSpan('Projeto: PixelArt')

// 8
function newTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks'); 
  let newTask = document.createElement('div'); // Criando nova div
  newTask.className = 'task'; // Adicionando className task à newTask
  newTask.style.backgroundColor = color; // Adicionando a cor recebida por parametro como backgroundColor
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
newTaskDiv('green');

// 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
      // Caso selectedTask retornar um array com nenhum item
    } else {
      event.target.className = 'task';
      // Caso a primeira condição retornar falso
    }
  });
}
setTaskClass();

// 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days'); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task'); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"
  
  days.addEventListener('click', function(event){ // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      event.target.style.color = 'red'; // atribui a cor salva na variável "color" ao evento alvo
      // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "taskColor"
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      // Caso a cor do evento alvo seja igual à da variável "taskColor"
    }
  });
}
setDayColor();

// 11
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      // Caso o input tenha um valor de caracteres maior que 0
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      // Caso o input não tenha nada digitado
      alert('Error: Type at least 1 letter/number/symbol.'); // Cria um alerta para informar que não tem texto digitado

    } 
  });
  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      // Aqui ele verifica se a tecla pressionada é o "Enter" e a quantidade de letras
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    
    }
  });
}

addNewTask();