//приветствие по введенному в форму
const form = document.getElementById('name-form');
form.addEventListener('submit', consoleForm)

function consoleForm(event) {
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
    console.log(`Hello, ${value}`);
}

//скинуть цвет после следующего нажатия
function getAlert(event) {
    const btn = event.target;
    if(btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = 'unset'
    } else {
        btn.style.backgroundColor = 'red'
    }
}

const buttonElement = document.getElementById('btn')
buttonElement.addEventListener('click', getAlert)

// Исчезнуть кнопку после нажатия

function getAlert(event) {
    console.log(event)
    event.target.style.diasplay = 'none';
    event.target.removeEventListener('click', getAlert)
}

const buttonElement = document.getElementById('btn')
buttonElement.addEventListener('click', getAlert)

