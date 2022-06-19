function addItem() {
    //get elements from both inputs in an object
    // upon click
    //add them to the dropdown w id
    //let buttoon = document.querySelector('input [type="button"]');
    let key = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let select = document.getElementById('menu')

    let option = document.createElement('option');
    option.textContent = key
    option.value = value

    select.appendChild(option)

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
    
    // buttoon.addEventListener('click', onClick);

    // function onClick(e) {
        
    //     let obj = {key: value}
    //     let option = document.createElement('option');

    //     option.textContent = key

    //     console.log(document.querySelector('select [id="menu"]'));
    // }

}