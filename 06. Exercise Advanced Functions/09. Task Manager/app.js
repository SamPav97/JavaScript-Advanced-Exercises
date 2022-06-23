function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');
    let add = document.getElementById('add');
    let sections = Array.from(document.querySelectorAll('section'));

    add.addEventListener('click', OnClick)

    function OnClick(e) {
        e.preventDefault()
        if (task.value != '' && description.value != '' && dueDate.value != '') {
            let article = document.createElement('article');
            let h3 = document.createElement('h3')
            h3.textContent = task.value;
            let p1 = document.createElement('p')
            p1.textContent = 'Description: ' + description.value;
            let p2 = document.createElement('p');
            p2.textContent = 'Due Date: ' + dueDate.value;
            let div = document.createElement('div');
            div.className = 'flex';
            let button1 = document.createElement('button');
            button1.className = 'green';
            button1.id = 'str'
            button1.textContent = 'Start';
            let button2 = document.createElement('button');
            button2.className = 'red';
            button2.id = 'del'
            button2.textContent = 'Delete';
            let button3 = document.createElement('button');
            button3.className = 'orange';
            button3.id = 'fin'
            button3.textContent = 'Finish';

            div.appendChild(button1);
            div.appendChild(button2);

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);

            let divToPutOpen = sections[1].children;
            divToPutOpen[1].appendChild(article)

            task.value = '';
            description.value = '';
            dueDate.value = '';


            
            button2.addEventListener('click', onDel);

            function onDel(e) {
                let toDel = e.target;
                toDel.parentElement.parentElement.remove()
            }

            
            button1.addEventListener('click', onStr);

            function onStr() {
                button1.remove();
                div.appendChild(button3);
                sections[2].children[1].appendChild(article)
            }

            button3.addEventListener('click', onFin);

            function onFin() {
                div.remove()
                sections[3].children[1].appendChild(article)
            }
        }


    }



}