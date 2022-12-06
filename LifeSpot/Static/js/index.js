let age = prompt("Пожалуйста, введите ваш возраст");

if (age < 18) {
    alert("Извините, содержимое сайта только для лиц от 18 лет!");
    window.location.href = "https://www.google.com/";
}
else {
    alert("Добро пожаловать на LifeSpot! " + new Date().toLocaleString());
}


function filter(str) {
    str = str.toLowerCase();
    let translations = document.getElementsByClassName('video-container');

    //let input = document.getElementsByClassName('input')[0].value;

    for (let i = 0; i < translations.length; i++) {
        let title = translations[i].querySelector('h3').innerText.toLowerCase();

        if (!title.includes(str)) {     //(input)
            translations[i].style.display = 'none';
        } else {
            translations[i].style.display = 'inline-block';
        }
    }
}