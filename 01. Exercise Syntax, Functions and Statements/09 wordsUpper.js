function wordsUpper(str) {
    var re = /[A-za-z]+/g;
    var s = str;

    let lst = s.match(re)
    let capital = []

    for (const i of lst) {
        capital.push(i.toUpperCase());
    }

    console.log(capital.join(", "));

}

wordsUpper('hello')