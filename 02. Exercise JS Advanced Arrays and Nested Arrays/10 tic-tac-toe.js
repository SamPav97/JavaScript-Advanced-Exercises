function ticTacToe(movements) {
    let field = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let count = 0;

    for (const el of movements) {
        count += 1;
        let lst = el.split(' ');
        let row = lst[0];
        let col = lst[1];

        if (field[row][col] == false) {
            if (count % 2 == 0) {
                field[row][col] = 'O'
            } else {
                field[row][col] = 'X'
            }
        } else {
            console.log("This place is already taken. Please choose another!");
            count -= 1;
        }

        if (checkWin(field)) {
            console.log(checkWin(field));
            console.log(printField(field));
            break;
        }
    
        if (count == 9) {
            console.log(`The game ended! Nobody wins :(`);
            console.log(printField(field));
            break;
        }
    
    }

    function checkWin(pitch) {
        for (let row = 0; row < pitch.length; row++) {
            if (pitch[row][0] != false && pitch[row][0] == pitch[row][1] && pitch[row][1] == pitch[row][2]) {
                return `Player ${pitch[row][0]} wins!`;
            }
        }
    

        if (pitch[0][0] != false && pitch[0][0] == pitch[1][0] && pitch[1][0] == pitch[2][0]) {
            return `Player ${pitch[0][0]} wins!`;
            }
    
        
        if(pitch[0][0] != false && pitch[0][0] == pitch[1][1] && pitch[1][1] == pitch[2][2]) {
            return `Player ${pitch[0][0]} wins!`;
        } else if (pitch[0][2] != false && pitch[0][2] == pitch[1][1] && pitch[1][1] == pitch[2][0]) {
            return `Player ${pitch[0][2]} wins!`;
        } 
    
    }
    
    function printField(teren) {
        let lst = []
        for (const row of teren) {
            lst.push(row.join('\t'));
        }
        return lst.join('\n')
    }
    
    
    
    
    // for (const row of field) {
    //     if (row.includes(false) == false) {
    //         console.log(`The game ended! Nobody wins :(`);
    //         console.log(printField(field));
    //         return;
    //     }
        
    // }
    
}


ticTacToe(["0 0",
"0 2",
"1 0", 
"0 1",
"2 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

)