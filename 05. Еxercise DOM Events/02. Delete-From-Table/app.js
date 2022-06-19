function deleteByEmail() {
    let srch = document.getElementsByName("email")[0].value;

    let ppl = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;
    for (const row of ppl) {
        for (const data of row.childNodes) {
            if (srch.length > 0 && data.textContent.includes(srch)) {
                const parent = row.parentElement;
                parent.removeChild(row)
                //row.remove;
                found = true
            }
        }
    }

    if (found) {
        document.getElementById("result").textContent = 'Deleted.';
    } else {
        document.getElementById("result").textContent = 'Not found.'
    }

    document.getElementsByName("email")[0].value = ''


}