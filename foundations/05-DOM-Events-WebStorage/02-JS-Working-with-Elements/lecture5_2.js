// VID 1

// .parentNode = mostrar os elementos pai de cada elemento HTML. 

// as principais propriedades de nodes:

// parentNode: retorna o nó pai.
// parentElement: retorna o elemento pai.
// childNodes: retorna um NodeList com todos os nós filhos.
// children: retorna um HTMLCollection com todos os elementos filhos.
// firstChild: retorna o primeiro nó filho.
// firstElementChild: retorna o primeiro elemento filho.
// lastChild: retorna o último nó filho.
// lastElementChild: retorna o último elemento filho.
// nextSibling: retorna o próximo nó.
// nextElementSibling: retorna o próximo elemento.
// previousSibling: retorna o nó anterior.
// previousElementSibling: retorna o elemento anterior.
// removeChild: remover filho selecionado

// PASSO 1: Capturar o elemento que será pai. (father = document.getElementById('first'))
// PASSO 2: Criar o elemento filho. (filho = document.createElement('div'))
// A forma mais comum é com o document.createElement('tag').
// PASSO 3: Adicionando características e/ou conteúdo ao novo elemento. 
// Pode ser texto, classes ou ids estilizadas no CSS, entre outros. (filho.innerText = 'random text') / (filho.className = 'circle blue small')
// PASSO 4: Hora de relacionar pai (passo 1) e filho (passo 2). father.appendChild(son). 

// PASSO 5: REFATORAÇÃO DO CÓDIGO QUANDO HÁ MUITA REPETIÇÃO - criação de função
// 

// exemplo 1

console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// VID 2 + AULA AO VIVO
// papai = document.getElementByTag('header')
// createElement - cria elementos como 'li', por exemplo. filhinho = document.createElement('li')
// appendChild - adicionar um elemento filho ao pai. 
// Após document.createElement('li') fazer um papai.appendChild(filhinho). Aí irá adicionar o filho no html.

