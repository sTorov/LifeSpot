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
