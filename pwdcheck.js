function checkPassword() {
    const password = document.querySelector('#user_password');
    const confirm = document.querySelector('#confirm_password');
    if (password.value !== confirm.value) {
        password.value = '';
        confirm.value = '';
        return false;
    }
    else if (password.value !== '' && confirm.value !== '') {
        myForm.submit();
        return true;
    }
}

const myForm = document.querySelector('#myform');
const submit = document.querySelector('#create');
submit.addEventListener('click', () => checkPassword());