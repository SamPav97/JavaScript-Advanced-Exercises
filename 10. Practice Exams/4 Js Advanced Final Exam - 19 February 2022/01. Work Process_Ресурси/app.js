function solve() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthday = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireButton = document.getElementById('add-worker');
    let employees = document.getElementById('tbody');
    let totalSalaries = document.getElementById('message').children[0];
    let runningTotal = 0;

    hireButton.addEventListener('click', onHire);

    function onHire(e) {
        e.preventDefault()

        if (fname.value == '' || lname.value == '' || email.value == '' || birthday.value == '' ||
            position.value == '' || salary.value == '') {
            return
        }

        let tr = document.createElement('tr');
        let tdFname = document.createElement('td');
        tdFname.textContent = fname.value;
        let tdLname = document.createElement('td');
        tdLname.textContent = lname.value;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email.value;
        let tdBirthday = document.createElement('td');
        tdBirthday.textContent = birthday.value;
        let tdPosition = document.createElement('td');
        tdPosition.textContent = position.value;
        let tdSalary = document.createElement('td');
        tdSalary.textContent = salary.value;
        let buttonContainer = document.createElement('td');
        let firedButton = document.createElement('button');
        firedButton.className = 'fired';
        firedButton.textContent = 'Fired';
        let editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit'

        tr.appendChild(tdFname);
        tr.appendChild(tdLname);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirthday);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        buttonContainer.appendChild(firedButton);
        buttonContainer.appendChild(editButton);
        tr.appendChild(buttonContainer);

        employees.appendChild(tr);
        runningTotal += Number(salary.value);
        totalSalaries.textContent = runningTotal.toFixed(2);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birthday.value = '';
        position.value = '';
        salary.value = '';

        editButton.addEventListener('click', onEdit);

        function onEdit() {

            fname.value = tdFname.textContent;
            lname.value = tdLname.textContent;
            email.value = tdEmail.textContent;
            birthday.value = tdBirthday.textContent;
            position.value = tdPosition.textContent;
            salary.value = tdSalary.textContent;

            runningTotal -= Number(tdSalary.textContent);
            totalSalaries.textContent = runningTotal.toFixed(2);

            tr.remove()
        }

        firedButton.addEventListener('click', onFire);

        function onFire() {
            runningTotal -= Number(tdSalary.textContent);
            totalSalaries.textContent = runningTotal.toFixed(2);

            tr.remove()
        }




    }
}
solve()