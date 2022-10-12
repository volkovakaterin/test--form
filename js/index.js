const message = document.querySelector('.message');
const form = document.querySelector('.form');
const deleteMessage = document.querySelector('.delete');
const customer = document.querySelector('.customer-radio');
const provider = document.querySelector('.provider-radio');
const emailField = document.querySelector('.website-field');

form.onsubmit = (evt) => {
    evt.preventDefault();
   message.classList.add('show');
}

deleteMessage.onclick = () => {
    message.classList.remove('show'); 
}

customer.onclick = () => {
emailField.classList.add('hide')
}

provider.onclick = () => {
    emailField.classList.remove('hide');
}

