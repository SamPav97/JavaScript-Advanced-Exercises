// function solve() {
//     let recipient = document.getElementById('recipientName');
//     let title = document.getElementById('title');
//     let message = document.getElementById('message');
//     let resetButton = document.getElementById('reset');
//     let addButton = document.getElementById('add');
//     let listOfMails = document.getElementById('list');
//     let deleteList = document.getElementsByClassName("delete-list")[0];
//     let sendList = document.getElementsByClassName("sent-list")[0];

//     resetButton.addEventListener('click', onReset);

//     function onReset(e) {
//         e.preventDefault()
//         recipient.value = '';
//         title.value = '';
//         message.value = '';
//     }

//     addButton.addEventListener('click', onAdd);

//     function onAdd(e) {
//         e.preventDefault()

//         if (recipient.value == '' || title.value == '' || message.value == '') {
//             return
//         }

//         let li = document.createElement('li');
//         // let h41 = document.createElement('h4');
//         // h41.textContent = `Title: ${title.value}`;
//         // let h42 = document.createElement('h4');
//         // h42.textContent = `Recipient Name: ${recipient.value}`;
//         // let span = document.createElement('span');
//         // span.textContent = message.value;

//         // let div = document.createElement('div');
//         // div.id = 'list-action';
//         // let sendButton = document.createElement('button');
//         // sendButton.type = 'submit';
//         // sendButton.id = 'send';
//         // sendButton.textContent = 'Send';
//         // let delButton = document.createElement('button');
//         // delButton.type = 'submit';
//         // delButton.id = 'delete';
//         // delButton.textContent = 'Delete'

//         // div.appendChild(sendButton);
//         // div.appendChild(delButton);

//         // li.appendChild(h41);
//         // li.appendChild(h42);
//         // li.appendChild(span);
//         // li.appendChild(div);

//         li.innerHTML = `<h4>Title: ${title.value}</h4>
//         <h4>Recipient Name: ${recipient.value}</h4>
//         <span>${message.value}</span>
//         <div id="list-action">
//         <button type="submit" id="send">Send</button>
//         <button type="submit" id="delete">Delete</button>`;



//         listOfMails.appendChild(li)

//         let oldRecip = recipient.value;
//         let oldTitle = title.value;

//         recipient.value = '';
//         title.value = '';
//         message.value = '';

//         sendButton = document.getElementById('send');

//         sendButton.addEventListener('click', onSend);

//         function onSend(e) {
//             let currentLi = e.currentTarget.parentNode.parentNode
//             currentLi.innerHTML = `<span>To: ${oldRecip}</span>
//             <span>Title: ${oldTitle}</span>
//             <div class='btn'>
//             <button type="submit" class="delete">Delete</button>
//             </div>`
//             // let sendSpan1 = document.createElement('span');
//             // sendSpan1.textContent = `To: ${oldRecip}`;
//             // let sendSpan2 = document.createElement('span');
//             // sendSpan2.textContent = `Title: ${oldTitle}`;
//             // let sendDiv = document.createElement('div');
//             // sendDiv.class = 'btn';
//             // let sendDelButton = document.createElement('button');
//             // sendDelButton.textContent = 'Delete'
//             // sendDelButton.type = 'submit';
//             // sendDelButton.class = 'delete';

//             // sendDiv.appendChild(sendDelButton);

//             // sendLi.appendChild(sendSpan1);
//             // sendLi.appendChild(sendSpan2);
//             // sendLi.appendChild(sendDiv);
//             sendList.appendChild(currentLi);

//             //sendDelButton.addEventListener('click', onClick);

//             // function onClick() {
//             //     sendLi.remove();

//             //     let delLi = document.createElement('li');
//             //     let delSpan1 = document.createElement('span');
//             //     delSpan1.textContent = `To: ${oldRecip}`;
//             //     let delSpan2 = document.createElement('span');
//             //     delSpan2.textContent = `Title: ${oldTitle}`;

//             //     delLi.appendChild(delSpan1);
//             //     delLi.appendChild(delSpan2);
//             //     deleteList.appendChild(delLi);
//             // }
//         }


//         let delButton = document.getElementById('delete')

//         delButton.addEventListener('click', onDelete);

//         function onDelete(ev) {
//             let delCurrentLi = ev.currentTarget.parentNode.parentNode

//             delCurrentLi.innerHTML = `<span>To: ${oldRecip}</span>
//             <span>Title: ${oldTitle}</span>`
//             // let delSpan1 = document.createElement('span');
//             // delSpan1.textContent = `To: ${oldRecip}`;
//             // let delSpan2 = document.createElement('span');
//             // delSpan2.textContent = `Title: ${oldTitle}`;

//             // delLi.appendChild(delSpan1);
//             // delLi.appendChild(delSpan2);
//             deleteList.appendChild(delLi);

//         }


//     }



// }
// solve()






function solve() {
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let resetButton = document.getElementById('reset');
    let addButton = document.getElementById('add');
    let listOfMails = document.getElementById('list');
    let deleteList = document.getElementsByClassName("delete-list")[0];
    let sendList = document.getElementsByClassName("sent-list")[0];

    resetButton.addEventListener('click', onReset);

    function onReset(e) {
        e.preventDefault()
        recipient.value = '';
        title.value = '';
        message.value = '';
    }

    addButton.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault()

        if(recipient.value == '' || title.value == '' || message.value == '') {
            return
        }

        let li = document.createElement('li');
        let h41 = document.createElement('h4');
        h41.textContent = `Title: ${title.value}`;
        let h42 = document.createElement('h4');
        h42.textContent = `Recipient Name: ${recipient.value}`;
        let span = document.createElement('span');
        span.textContent = message.value;

        let div = document.createElement('div');
        div.id = 'list-action';
        let sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.textContent = 'Send';
        let delButton = document.createElement('button');
        delButton.type = 'submit';
        delButton.id = 'delete';
        delButton.textContent = 'Delete'

        div.appendChild(sendButton);
        div.appendChild(delButton);

        li.appendChild(h41);
        li.appendChild(h42);
        li.appendChild(span);
        li.appendChild(div);

        listOfMails.appendChild(li)

        let oldRecip = recipient.value;
        let oldTitle = title.value;
        
        recipient.value = '';
        title.value = '';
        message.value = '';




        delButton.addEventListener('click', onDelete);

        function onDelete(){
            li.remove();

            let delLi = document.createElement('li');
            let delSpan1 = document.createElement('span');
            delSpan1.textContent = `To: ${oldRecip}`;
            let delSpan2 = document.createElement('span');
            delSpan2.textContent = `Title: ${oldTitle}`;
            
            delLi.appendChild(delSpan1);
            delLi.appendChild(delSpan2);
            deleteList.appendChild(delLi);

        }

        sendButton.addEventListener('click', onSend);

        function onSend() {
            let sendLi = document.createElement('li');
            let sendSpan1 = document.createElement('span');
            sendSpan1.textContent = `To: ${oldRecip}`;
            let sendSpan2 = document.createElement('span');
            sendSpan2.textContent = `Title: ${oldTitle}`;
            let sendDiv = document.createElement('div');
            sendDiv.class = 'btn';
            let sendDelButton = document.createElement('button');
            sendDelButton.textContent = 'Delete'
            sendDelButton.type = 'submit';
            sendDelButton.class = 'delete';

            sendDiv.appendChild(sendDelButton);
            
            sendLi.appendChild(sendSpan1);
            sendLi.appendChild(sendSpan2);
            sendLi.appendChild(sendDiv);
            sendList.appendChild(sendLi);
            li.remove()

            sendDelButton.addEventListener('click', onClick);

            function onClick() {
                sendLi.remove();

                let delLi = document.createElement('li');
                let delSpan1 = document.createElement('span');
                delSpan1.textContent = `To: ${oldRecip}`;
                let delSpan2 = document.createElement('span');
                delSpan2.textContent = `Title: ${oldTitle}`;
                
                delLi.appendChild(delSpan1);
                delLi.appendChild(delSpan2);
                deleteList.appendChild(delLi);
            }
        }
    }



}

solve()