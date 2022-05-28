function pieceOfPie(arr, strt, fin) {
    let ind1 = arr.indexOf(strt);
    let ind2 = arr.indexOf(fin);

    let res = arr.slice(ind1, ind2+1);
    return res;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)