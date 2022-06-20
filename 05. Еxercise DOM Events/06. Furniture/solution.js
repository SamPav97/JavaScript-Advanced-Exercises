function solve() {
  //get input field
  //parse input
  //get tbody tr
  //create td for each and a p in it
  // img dont have a p
  //append as child to tbody

  let [generate, buy] = Array.from(document.querySelectorAll('button'));

  generate.addEventListener('click', gen);
  buy.addEventListener('click', purchase);


  function gen() {
    let inputField = JSON.parse(document.querySelector('textarea').value)

    inputField.forEach(x => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let p = document.createElement('p');
      p.textContent = x.name;
      td2.appendChild(p)
      tr.appendChild(td2)
      let td3 = document.createElement('td');
      let p2 = document.createElement('p')
      p2.textContent = x.price
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = x.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let inp = document.createElement('input');
      inp.type = 'checkbox'
      td5.appendChild(inp)
      tr.appendChild(td5)

      let tbody = document.querySelector('tbody');
      tbody.appendChild(tr)

    });

  }


  function purchase() {
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(c => c.checked);
    let names = [];
    let totalPrice = 0;
    let averageDeco = 0;

    checkboxes.forEach(element => {
      let data = Array.from(element.parentElement.parentElement.querySelectorAll('p'));
      names.push(data[0].textContent);
      totalPrice += Number(data[1].textContent);
      averageDeco += Number(data[2].textContent);
    });

    let outputField = document.querySelectorAll('textarea')[1];

    let a = `Bought furniture: ${names.join(', ')}\n`
    outputField.value += a

    outputField.value += `Total price: ${totalPrice.toFixed(2)}\n`;

    outputField.value += `Average decoration factor: ${averageDeco/checkboxes.length}`



  }
}