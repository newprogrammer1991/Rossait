var btn = document.querySelector('.modal-footer .btn');
var isCorrect;
btn.addEventListener('click', validate);


function validate() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var text = document.querySelector("input[type=text]");
    var email = document.querySelector("input[type=email]");
    var checkbox = document.querySelector("input[type=checkbox]");
    isCorrect = true;
    btn.dataset.dismiss = '';
    resetError(text.parentNode);
    if (text.value == "") showError(text.parentNode, 'Введите свое имя');
    resetError(email.parentNode);
    if (!re.test(email.value)) showError(email.parentNode, 'Введите email');
    if (!checkbox.checked) isCorrect = false;
    if (isCorrect) btn.dataset.dismiss = 'modal';
};

function showError(container, showMessage) {
    isCorrect = false;
    container.className = 'error';
    var span = document.createElement('span');
    span.className = 'error-message';
    span.innerText = showMessage;
    container.appendChild(span);
};

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == 'error-message') {
        container.removeChild(container.lastChild);
    }
}
