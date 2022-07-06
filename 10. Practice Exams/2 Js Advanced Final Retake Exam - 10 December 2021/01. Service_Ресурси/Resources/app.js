window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let sendButton = document.querySelector('button'); // or '#right form button'
    let receivedOrders = document.getElementById('received-orders');
    let finishedOrders = document.getElementById('completed-orders');
    let clearButton = document.getElementsByClassName("clear-btn")[0];

    sendButton.addEventListener('click', onSend);

    function onSend(e) {
        e.preventDefault()
        if(description.value == '' || clientName.value == '' || clientPhone.value == '') {
            return
        }

        let div = document.createElement('div');
        div.className = 'container'; //or .classlist.add('container')
        let h2 = document.createElement('h2');
        h2.textContent = 'Product type for repair: ' + productType.value;
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
        let h4 = document.createElement('h4');
        h4.textContent = 'Description of the problem: ' + description.value;
        let startButton = document.createElement('button');
        startButton.className = 'start-btn';
        startButton.textContent = 'Start repair';
        let finishButton = document.createElement('button');
        finishButton.className = 'finish-btn';
        finishButton.textContent = 'Finish repair';
        finishButton.disabled = true

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startButton);
        div.appendChild(finishButton);
        receivedOrders.appendChild(div);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

        startButton.addEventListener('click', onStart);

        function onStart(){
            startButton.disabled = true;
            finishButton.disabled = false;
        }

        finishButton.addEventListener('click', onFinish);

        function onFinish(){
            startButton.remove();
            finishButton.remove();
            finishedOrders.appendChild(div)
        }

        clearButton.addEventListener('click', onClear);

        function onClear(){
            while (finishedOrders.lastChild.tagName == 'DIV') {
                finishedOrders.removeChild(finishedOrders.lastChild);
              }// or get all containers: allContainers = Array.from(e.currentTarget.parentNode.queryselectorAll('.container'))
              // and thenn loop thru all. for container in allcont. cont.remove()
        }

    }
}