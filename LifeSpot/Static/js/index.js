let session = new Map();

function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    session.set("date", new Date().toLocaleString());
}

function checkAge() {
    session.set("userAge", prompt("Пожалуйста, введите ваш возраст"));

    if (session.get("userAge") < 18) {
        alert("Извините, содержимое сайта только для лиц от 18 лет! Вы будете перенаправлены!");
        window.location.href = "https://www.google.com/";
    } else {
        alert(`Добро пожаловать на LifeSpot!\nТекущее время: ${session.get("date")}`);
    }
}

function printSession() {    
    for (let item of session) {
        console.log(item);
    }
}

const inputParseFunction = function() {
    return document.querySelector('.input').value.toLowerCase();
}

function filter() {
    //let input = document.getElementsByClassName('input')[0].value;
    let translations = document.getElementsByClassName('video-container');

    for (let i = 0; i < translations.length; i++) {
        let title = translations[i].querySelector('h3').innerText.toLowerCase();

        if (!title.includes(inputParseFunction())) {     //(!title.includes(input))
            translations[i].style.display = 'none';
        } else {
            translations[i].style.display = 'inline-block';
        }
    }
}