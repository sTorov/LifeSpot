let age = prompt("Пожалуйста, введите ваш возраст");

if (age < 18) {
    alert("Извините, содержимое сайта только для лиц от 18 лет!");
    window.location.href = "https://www.google.com/";
}
else {
    alert("Добро пожаловать на LifeSpot! " + new Date().toLocaleString());
}