function handleSession() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent);

    session.set("userAge", prompt("Пожалуйста, введите ваш возраст"));

    if (session.get("userAge") < 18) {
        alert("Извините, содержимое сайта только для лиц от 18 лет!");
        window.location.href = "https://www.google.com/";
    } else {
        let date = new Date().toLocaleString();
        alert(`Добро пожаловать на LifeSpot!\nТекущее время: ${date}`);
        session.set("date", date);
    }

    for (let item of session) {
        console.log(item);
    }
}


function filter(str) {
    str = str.toLowerCase();
    let translations = document.getElementsByClassName('video-container');

    //let input = document.getElementsByClassName('input')[0].value;

    for (let i = 0; i < translations.length; i++) {
        let title = translations[i].querySelector('h3').innerText.toLowerCase();

        if (!title.includes(str)) {     //(!title.includes(input))
            translations[i].style.display = 'none';
        } else {
            translations[i].style.display = 'inline-block';
        }
    }
}