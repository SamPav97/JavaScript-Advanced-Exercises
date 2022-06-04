function townsToJson(arr) {
    let objcts = []
    arr.shift()

    for (const line of arr) {
        arr = line.split('|').map(t => t.trim()).filter(a => a.length > 0);
        town = arr[0];
        latitude = arr[1];
        longitude = arr[2];
        

        objcts.push({Town: town, Latitude: Number(Number(latitude).toFixed(2)), Longitude: Number(Number(longitude).toFixed(2))});
    }
    console.log(JSON.stringify(objcts));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)