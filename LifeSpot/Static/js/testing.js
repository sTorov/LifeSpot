//  Ввод имени и отображение количества символов в нем
//let name = prompt("Введите ваше имя");
//alert(`Добро пожаловать ${name}, символов в вашем имени: ${name.length}`); 

//let element = document.getElementsByTagName("*");       //получение списка всех элементов на html-странице по тегу "*"
//alert(`Общее количество элементов на странице: ${element.length}`)

function saveInputText() {
    let element = document.querySelector('.input');
    let newInput = element.value;

    alert(`Предыдущее значение:\n${this.oldInput === '' || this.oldInput === undefined ? '<Пусто>' : this.oldInput}\n` +
        `Новое значение:\n${newInput === '' ? '<Пусто>' : newInput}`);

    this.oldInput = newInput;
    element.value = '';
}