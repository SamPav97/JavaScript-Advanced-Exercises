function solution() {
    let inputField = document.querySelector('input');
    let addGiftButton = document.querySelector('button');
    let [lstofGifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');

    addGiftButton.addEventListener('click', onAdd);

    function onAdd() {
        let li = document.createElement('li');
        li.className = 'gift';
        li.textContent = inputField.value;
        let sendBut = document.createElement('button');
        sendBut.id = 'sendButton';
        sendBut.textContent = 'Send';
        let discardBut = document.createElement('button');
        discardBut.id = 'discardButton';
        discardBut.textContent = 'Discard';
        li.appendChild(sendBut);
        li.appendChild(discardBut);

        lstofGifts.appendChild(li);

        Array.from(lstofGifts.getElementsByTagName("LI"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => lstofGifts.appendChild(li));
        
        inputField.value = ''


        sendBut.addEventListener('click', onSend);

        function onSend(){
            sentGifts.appendChild(li)
            li.children[0].remove();
            li.children[0].remove();
        }

        discardBut.addEventListener('click', onDiscard);

        function onDiscard() {
            discardedGifts.appendChild(li)
            li.children[0].remove();
            li.children[0].remove();
        }
    }
}