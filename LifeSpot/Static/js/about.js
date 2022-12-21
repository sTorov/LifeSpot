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

function Comment(textComment, userName, sumbitDate) {
    this.textComment = textComment;
    this.userName = userName;
    this.sumbitDate = sumbitDate;
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
        rate += `<p class="comment-rate">Рейтинг: ${object.rate}</p>`;
    }

    element.innerHTML +=
        `<div class="comment">
            <p><b>${object.userName}</b><span class="comment-date">${object.sumbitDate}</span></p>
            ${rate}
            <hr>
            <p class="comment-text">${object.textComment}</p>
        </div>`;

    inputNameElem.value = "";
    textAreaElem.value = "";
}
