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

let comment = new Map();
let textAreaElem = document.querySelector('.textarea');
let inputNameElem = document.querySelector('.review-input');

function editComment() {

    if (textAreaElem.value === null || textAreaElem.value.trim().length === 0) {
        alert("Введите текст коментария в соответствующее поле!");
    } else if (inputNameElem.value === null || inputNameElem.value.trim().length === 0) {
        alert("Необходимо указать имя в соответствующем поле!");
    } else {
        comment.set('textComment', textAreaElem.value);
        comment.set('userName', inputNameElem.value);
        comment.set('sumbitDate', new Date().toLocaleString());

        sumbitComment();
    }
}

const sumbitComment = () => {
    let element = document.getElementsByClassName('review-view-container')[0];
    element.innerHTML +=
        `<div class="comment">
            <p><b>${comment.get('userName')}</b><span class="comment-date">${comment.get('sumbitDate')}</span></p>
            <hr>
            <p class="comment-text">${comment.get('textComment')}</p>
        </div>`;

    inputNameElem.value = "";
    textAreaElem.value = "";
}
