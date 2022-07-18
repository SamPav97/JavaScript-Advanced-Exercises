window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let productionYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let publishButton = document.getElementById('publish');
  let profitMade = document.getElementById('profit');
  let soldCars = document.getElementById('cars-list');
  let carsTable = document.getElementById('table-body');
  let totlaEarned = 0;

  publishButton.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault()

    if (make.value == '' || model.value == '' || productionYear.value == '' || fuelType.value == '' || originalCost.value == '' || sellingPrice.value == '') {
      return
    }
    if (Number(originalCost.value) > Number(sellingPrice.value)) {
      return
    }

    let tr = document.createElement('tr');
    tr.className = 'row'
    let tdMake = document.createElement('td');
    tdMake.textContent = make.value;
    let tdModel = document.createElement('td');
    tdModel.textContent = model.value;
    let tdProductionYear = document.createElement('td');
    tdProductionYear.textContent = productionYear.value;
    let tdFuelType = document.createElement('td');
    tdFuelType.textContent = fuelType.value;
    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = originalCost.value;
    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice.value;
    let tdButtons = document.createElement('td');
    let editButton = document.createElement('button');
    editButton.className = 'action-btn edit';
    editButton.textContent = 'Edit';
    let sellButton = document.createElement('button');
    sellButton.className = 'action-btn sell';
    sellButton.textContent = 'Sell';

    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdProductionYear);
    tr.appendChild(tdFuelType);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);

    carsTable.appendChild(tr);

    make.value = '';
    model.value = '';
    productionYear.value = '';
    fuelType.value = '';
    originalCost.value = '';
    sellingPrice.value = '';


    editButton.addEventListener('click', onEdit);

    function onEdit() {
      make.value = tdMake.textContent;
      model.value = tdModel.textContent;
      productionYear.value = tdProductionYear.textContent;
      fuelType.value = tdFuelType.textContent; //big letter?
      originalCost.value = tdOriginalCost.textContent;
      sellingPrice.value = tdSellingPrice.textContent;

      tr.remove()
    }

    sellButton.addEventListener('click', onSell);

    function onSell(){
      let earned = Number(tdSellingPrice.textContent) - Number(tdOriginalCost.textContent);
      totlaEarned += earned;

      let li = document.createElement('li');
      li.className = 'each-list';
      let span1 = document.createElement('span');
      span1.textContent = `${tdMake.textContent} ${tdModel.textContent}`
      let span2 = document.createElement('span');
      span2.textContent = tdProductionYear.textContent;
      let span3 = document.createElement('span');
      span3.textContent = earned;

      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);

      soldCars.appendChild(li);

      profitMade.textContent = totlaEarned.toFixed(2)

      tr.remove()
    }

  }
}
