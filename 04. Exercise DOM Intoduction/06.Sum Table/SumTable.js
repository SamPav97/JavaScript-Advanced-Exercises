function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr'));
    const ours = rows.slice(1, -1);
    let sum = 0;

    for (let row of ours) {
        const value = Number(row.lastElementChild.textContent);
        sum += value
    }
    document.getElementById('sum').textContent = sum

}