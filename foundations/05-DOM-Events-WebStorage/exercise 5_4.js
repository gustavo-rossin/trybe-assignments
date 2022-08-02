window.onload = function () {
    let select = document.querySelector('select');
    select.addEventListener('change', function () {
        // console.log(select.selectedOptions) -> para checar o as options de 'value' para indicar a cor do 'option' do html
        let stringSelect = select.selectedOptions[0];
        document.body.style.background = stringSelect.value
        localStorage.setItem('5.4-background-color', stringSelect.value)
    })

    let colorName = document.querySelector(".colorname");
    colorName.addEventListener('change', function () {
        let colorSelect = colorName.selectedOptions[0];
        let paragraph = document.getElementById('paragraph')
        // console.log(colorName.selectedOptions)
        paragraph.style.color = colorSelect.value
        localStorage.setItem('5.4-fontcolor', colorSelect.value) 
    })

    let wordSize = document.querySelectorAll(".colorname")[1];
    wordSize.addEventListener('change', function () {
        let wordSelect = wordSize.selectedOptions[0];
        let paragraph = document.getElementById('paragraph')
        if (wordSelect.value == "black") {
            paragraph.style.fontSize = "16px";
        } else if 
        (wordSelect.value == "white") {
            paragraph.style.fontSize = "20px";
        } else if 
        (wordSelect.value == "purple") {
        paragraph.style.fontSize = "24px";
        } else if 
        (wordSelect.value == "red") {
            paragraph.style.fontSize = "28px";
        }
        localStorage.setItem('5.4-wordSize', wordSelect.value)
    })

    let pageSize = document.querySelector('input[name="font-size"]');
    pageSize.addEventListener('change', function () {
      let p = document.querySelector('p');
      p.style.fontSize = `${pageSize.value}px`;
      localStorage.setItem('5.4-pageSize', `${pageSize.value}px`)
    })

    let savedBackground = localStorage.getItem('5.4-background-color');
    document.body.style.background = savedBackground

    let savedPageSize = localStorage.getItem('5.4-pageSize');
    let p = document.querySelector('p');
    p.style.fontSize = savedPageSize;
}