


function validate() {
    const input = document.querySelector('input');
    input.addEventListener('change', updateValue);

function updateValue(e) {
  if (/[a-z]+@[a-z]+.[a-z]+/.test(input.value)) {
            e.target.className = ''
        } else {
            e.target.className = 'error';
        }
}
    
}
