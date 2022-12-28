function closeCommentForm() {
    let form = document.querySelector('.review-edit-container');
    let button = document.querySelector('.open-button');
    button.style.display = 'inline';
    form.style.display = 'none';
}

function openCommentForm() {
    let form = document.querySelector('.review-edit-container');
    let button = document.querySelector('.open-button');
    button.style.display = 'none';
    form.style.display = 'block';
}

class Comment {
    constructor(textComment, userName, sumbitDate) {
        this.id = this.randomIdGenerator(1, 10000);
        this.textComment = textComment;
        this.userName = userName;
        this.sumbitDate = sumbitDate;
    }

    randomIdGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

let textAreaElem = document.querySelector('.textarea');
let inputNameElem = document.querySelector('.review-input');

function editComment() {
    if (textAreaElem.value === null || textAreaElem.value.trim().length === 0) {
        alert("Введите текст коментария в соответствующее поле!");
    } else if (inputNameElem.value === null || inputNameElem.value.trim().length === 0) {
        alert("Необходимо указать имя в соответствующем поле!");
    } else {
        let comment = new Comment(textAreaElem.value, inputNameElem.value, new Date().toLocaleString());
        if (document.querySelector('.checkbox').checked) {
            let review = Object.create(comment);
            review.rate = 0;
            sumbitComment(review);
        } else {
            sumbitComment(comment);
        }
    }
}

const sumbitComment = (object) => {
    let element = document.getElementsByClassName('review-view-container')[0];
    let rate = '';

    if (object.hasOwnProperty('rate')) {
        rate += `<button id="${object.id}" class="button-rate" onclick="supporting(this)">❤️ ${object.rate}</button>`;
    }

    element.innerHTML +=
        `<div class="comment">
            <p><b>${object.userName}</b>${rate}<span class="comment-date">${object.sumbitDate}</span></p>
            <hr>
            <p class="comment-text">${object.textComment}</p>
        </div>`;

    inputNameElem.value = "";
    textAreaElem.value = "";
}

const supportingComments = [];

function supporting(button) {
    let words = button.innerText.split(' ');

    if (supportingComments.includes(button.id)) {
        +words[1]--;
        supportingComments.splice(supportingComments.indexOf(button.id), 1);
        button.style.background = "#111";
    } else {
        +words[1]++;
        supportingComments.push(button.id);
        button.style.background = "#333";
    }

    words[1] = words[1].toString();
    button.innerText = words.join(' ');
}

function scroll(offset) {
    let carusel = document.querySelector('.carusel');
    let sliderBar = document.querySelector('.slider-bar');
    let activeSlide = document.querySelector('.slide[data-active]');
    let activeItem = document.querySelector('.carusel-bar_item[data-active]');

    if (offset > 0) {
        if (activeSlide.nextElementSibling !== null) {
            carusel.scrollBy(1000, 0);
            SetDataElements(activeSlide.nextElementSibling, activeItem.nextElementSibling, activeSlide, activeItem);
        } else {
            carusel.scrollTo({top: 0, left: 0});
            SetDataElements(carusel.children[0], sliderBar.children[0], activeSlide, activeItem);
        }
    } else {
        if (activeSlide.previousElementSibling !== null) {
            carusel.scrollBy(-1000, 0);
            SetDataElements(activeSlide.previousElementSibling, activeItem.previousElementSibling, activeSlide, activeItem);
        } else {
            carusel.scrollTo({top: 0, left: carusel.scrollWidth});
            SetDataElements(carusel.children[carusel.children.length - 1], sliderBar.children[sliderBar.children.length - 1], activeSlide, activeItem);
        }
    }    
}

function SetDataElements(setSlide, setItem, unsetSlide, unsetItem) {
    setSlide.dataset.active = true;
    delete unsetSlide.dataset.active;

    setItem.dataset.active = true;
    delete unsetItem.dataset.active;
}

const next = () => scroll(1);
const prev = () => scroll(-1);

function tapItem(offset) {
    debugger;
    let carusel = document.querySelector('.carusel');
    let activeSlide = document.querySelector('.slide[data-active]');
    let activeItem = document.querySelector('.carusel-bar_item[data-active]');
    let items = document.getElementsByClassName('carusel-bar_item');
    let slides = document.getElementsByClassName('slide');

    carusel.scrollTo({ top: 0, left: slides[0].clientWidth * offset });
    SetDataElements(slides[offset], items[offset], activeSlide, activeItem);
}
