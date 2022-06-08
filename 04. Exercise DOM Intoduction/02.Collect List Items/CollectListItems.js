function extractText() {
    const items = Array.from(document.querySelectorAll('li'));
    const res = items.map(e => e.textContent).join('\n');

    document.getElementById('result').value = res;

    
}




// document.querySelectorAll('li')
// NodeList(3) [li, li, li]
// document.getElementsByTagName('li')
// HTMLCollection(3) [li, li, li]
// document.getElementById('items')
// <ul id=​"items">​…​</ul>​
// const list = document.getElementById('items')
// undefined
// list.children
// HTMLCollection(3) [li, li, li]