function handleSession() {
    let session = new Map();

    session.set("userAgent", window.navigator.userAgent);
    session.set("userAge", prompt("Пожалуйста, введите ваш возраст"));
    session.set("date", new Date().toLocaleString());

    if (session.get("userAge") < 18) {
        alert("Извините, содержимое сайта только для лиц от 18 лет! Вы будете перенаправлены!");
        window.location.href = "https://www.google.com/";
    } else {
        alert(`Добро пожаловать на LifeSpot!\nТекущее время: ${session.get("date")}`);
    }

    return session;
}

function printSession(session) {    
    for (let item of session) {
        console.log(item);
    }
}


function filter(handlerInputStr) {
    //let input = document.getElementsByClassName('input')[0].value;
    let translations = document.getElementsByClassName('video-container');

    for (let i = 0; i < translations.length; i++) {
        let title = translations[i].querySelector('h3').innerText.toLowerCase();

        if (!title.includes(handlerInputStr())) {     //(!title.includes(input))
            translations[i].style.display = 'none';
        } else {
            translations[i].style.display = 'inline-block';
        }
    }
}