function checkPassword() {
    const password = document.querySelector('#user_password');
    const confirm = document.querySelector('#confirm_password');
    const errormsg = document.querySelector('.errormsg')
    if (password.value !== "" && confirm.value !== ""){
        if (password.value !== confirm.value) {
            password.classList.add("error");
            confirm.classList.add("error");
            errormsg.classList.remove("hidden");
            document.activeElement.blur();
            password.onfocus = function () {
                if (password.classList.contains("error")) {
                    password.value = '';
                    confirm.value = '';
                    password.classList.remove("error");
                    confirm.classList.remove("error");
                    errormsg.classList.add("hidden");
                }
            }
            confirm.onfocus = function () {
                if (confirm.classList.contains("error")) {
                    password.value = '';
                    confirm.value = '';
                    password.classList.remove("error");
                    confirm.classList.remove("error");
                    errormsg.classList.add("hidden");
                }
            }
            return false;
        }
        else{
            return true;
        }
    }
}

const myForm = document.querySelector('#myform');
const submit = document.querySelector('#create');
submit.addEventListener('click', () => checkPassword());