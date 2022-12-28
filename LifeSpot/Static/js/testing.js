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

///////////////////////////////////////////

const imgs = [
    "../../Static/img/london.jpg",
    "../../Static/img/ny.jpg",
    "../../Static/img/spb.jpg"
];

function insertSliderBar() {
    let slider = document.querySelector('.slider');

    let bar = document.createElement('div');
    bar.setAttribute('class', 'slider-bar');

    for (let i = 0; i < imgs.length; i++) {
        bar.innerHTML += `<div class="slider-bar_item item_${i}" onclick="sliderItemTap(this)"></div>`
    }

    slider.insertBefore(bar, slider.lastElementChild.nextSibling);
}

window.onload = insertSliderBar;

const sliderBarItems = document.getElementsByClassName('slider-bar_item');

function sliderNext() {
    img.style.opacity = 0;

    setTimeout(() => {
        let src = img.getAttribute('src');
        let index = imgs.indexOf(src);

        if (index === imgs.length - 1) {
            img.src = imgs[0];
            sliderBarItems[0].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            sliderBarItems[imgs.length - 1].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        } else {
            img.src = imgs[index + 1];
            sliderBarItems[index + 1].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            sliderBarItems[index].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }

        img.style.opacity = 1;
    }, 800);
}

function sliderPrev() {
    img.style.opacity = 0;

    let src = img.getAttribute('src');
    let index = imgs.indexOf(src);

    setTimeout(() => {
        if (index === 0) {
            img.src = imgs[imgs.length - 1];
            sliderBarItems[imgs.length - 1].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            sliderBarItems[0].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        } else {
            img.src = imgs[index - 1];
            sliderBarItems[index - 1].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            sliderBarItems[index].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }

        img.style.opacity = 1;
    }, 800)
}

function sliderItemTap(item) {
    let index = Array.from(sliderBarItems).indexOf(item);
    img.style.opacity = 0;

    setTimeout(() => {
        for (const elem of sliderBarItems) {
            if (elem === item) {
                elem.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            } else {
                elem.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }
        }
        img.src = imgs[index];
        img.style.opacity = 1;
    }, 800)
}
