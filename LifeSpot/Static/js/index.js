let session = {};

function handleSession() {
    session.userAgent = window.navigator.userAgent;
    session.date = new Date().toLocaleString();
}

function checkAge() {
    session.userAge = prompt("Пожалуйста, введите ваш возраст");

    if (session.userAge < 18) {
        alert("Извините, содержимое сайта только для лиц от 18 лет! Вы будете перенаправлены!");
        window.location.href = "https://www.google.com/";
    } else {
        alert(`Добро пожаловать на LifeSpot!\nТекущее время: ${session.date}`);
    }
}

function printSession() {    
    for (let key in session) {
        console.log(`${key}: ${session[key]}`);
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

//function subscribeInstagram() {
//    setTimeout(() => {
//        alert("Нравится LifeSpot?\nПодпишитесь на наш Instagram @LifeSpot");
//    }, 60000);
//}

function subscribeInstagram() {
    setTimeout(() => {
        let div = document.querySelector('.substract');
        div.style.display = 'flex';
    }, 60000);
}

function hideSubstract() {
    setTimeout(() => {
        let div = document.querySelector('.substract');
        div.style.display = 'none';
    }, 300);
}