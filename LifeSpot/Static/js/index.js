//let session = {};

function handleSession(logger, checker) {
//    session.userAgent = window.navigator.userAgent;
//    session.date = new Date().toLocaleString();
    if (sessionStorage.getItem('userAgent') == null) {
        sessionStorage.setItem('userAgent', window.navigator.userAgent);
    }
    if (sessionStorage.getItem('date') == null) {
        sessionStorage.setItem('date', new Date().toLocaleString());
    }
    if (sessionStorage.getItem('userAge') == null) {
        sessionStorage.setItem('userAge', prompt("Пожалуйста, введите ваш возраст"));    //session.userAge = prompt("Пожалуйста, введите ваш возраст");
        checker(true);
    } else {
        checker(false);
    }

    logger();
}

function checkAge(greetings) {
    if (+sessionStorage.getItem('userAge') < 18 || isNaN(sessionStorage.getItem('userAge'))) {     //session.userAge < 18
        alert("Извините, содержимое сайта только для лиц от 18 лет! Вы будете перенаправлены!");
        window.location.href = "https://www.google.com/";
    } else if (greetings) {
        alert(`Добро пожаловать на LifeSpot!\nТекущее время: ${sessionStorage.getItem('date')}`);     //session.date
    }
}

function printSession() {    
    //for (let key in session) {
    //    console.log(`${key}: ${session[key]}`);
    //}
    for (var key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key)) {
            console.log(`${key}: ${sessionStorage.getItem(key)}`)
        }
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