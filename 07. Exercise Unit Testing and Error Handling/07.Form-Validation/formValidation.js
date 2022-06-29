function validate() {
    let check = document.querySelector('#company');
    let companyContent = document.getElementById('companyInfo')
    check.addEventListener('change', onChange);

    function onChange() {
        if (check.checked == true) {
            companyContent.style.display = 'block'
        } else {
            companyContent.style.display = 'none'
        }
    }


    let submit = document.getElementById('submit');

    submit.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        let invalidfields = [];

        let username = document.getElementById('username');
        let RegUsername = /^[A-Za-z0-9]{3,20}$/;
        if (!RegUsername.test(username.value)) {
            invalidfields.push(username);
        }

        let confirmPass = document.getElementById('confirm-password');
        let password = document.getElementById('password');
        let RegPass = /^[\w]{5,15}$/
        if (!RegPass.test(password.value) || password.value !== confirmPass.value) {
            invalidfields.push(password);
            invalidfields.push(confirmPass);
        }

        let email = document.getElementById('email');
        let regMail = /^[^@.]+@[^@]*\.[^@]+$/;
        if (!regMail.test(email.value)) {
            invalidfields.push(email);
        }

        if (check.checked) {
            let companyCode = document.getElementById('companyNumber');
            let companyPattern = /^[0-9]{4}$/;
            if (Number(companyCode.value) < 1000 || Number(companyCode.value) > 9999) {
                invalidfields.push(companyCode);
            }
        }

        invalidfields.forEach(x => x.style.borderColor = 'red')

        let valid = document.getElementById('valid');

        if(invalidfields.length == 0) {
            valid.style.display = 'block'
        }

    }
}