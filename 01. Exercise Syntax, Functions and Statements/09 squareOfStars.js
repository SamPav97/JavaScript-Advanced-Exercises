function squareOfStars(par=5) {
    for (let i = 0; i < par; i++) {
        console.log('');
        for (let j = 0; j < par; j++) {
            console.log('* ');
        }
    }
}

squareOfStars(2)