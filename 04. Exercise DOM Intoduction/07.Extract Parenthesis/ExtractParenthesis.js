function extract(content) {
    const text = document.getElementById(content).textContent;
    let res = '';

    const pattern = /\((.+?)\)/g;

    let match = pattern.exec(text)

    while (match != null) {
        res += match[1] + '; ';
        match = pattern.exec(text);
    }

    return res

}