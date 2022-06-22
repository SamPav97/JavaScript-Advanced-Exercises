function sortArray(arr, way) {

    let ways = {
        asc: (array) => {array.sort((a, b) => a - b)},
        desc: (array) => {array.sort((a, b) => b - a)}
    }
    
    ways[way](arr)

    return arr

}


sortArray([14, 7, 17, 6, 8], 'asc')