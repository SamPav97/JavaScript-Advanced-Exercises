function addItem() {
    let txt = document.getElementById("newItemText").value;

    const liEl = document.createElement('li');

    liEl.textContent = txt;

    let ul = document.getElementById("items");

    if (txt.length > 0) {
        ul.appendChild(liEl);
    }

    document.getElementById("newItemText").value = '';

}