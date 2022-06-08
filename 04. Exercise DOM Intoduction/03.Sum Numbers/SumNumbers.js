function calc() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
    let sum = Number(n1) + Number(n2);

    if (Number.isNaN(sum)) {
        alert('Please enter numbers!');
    } else { document.getElementById('sum').value = sum
}

   


}
