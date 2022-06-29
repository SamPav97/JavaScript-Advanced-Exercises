function validate() {
    let inp = document.getElementById('email');
    let RegMail = /[a-z]+@[a-z]+.[a-z]+/g

    inp.addEventListener('change', onChange);

    function onChange(){
        if (!RegMail.test(inp.value)) {
            inp.className = 'error';
        } else {
            inp.className = ''
        }
    }
}