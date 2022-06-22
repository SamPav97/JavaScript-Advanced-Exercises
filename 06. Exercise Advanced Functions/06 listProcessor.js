function listProcessor(comms) {
    let collection = [];
    let obj = {
        add(str) { collection.push(str) },
        remove(str) {
            collection = collection.filter(function (x) {
                return x !== str;
            });
        },
        print() {console.log(collection.join(','))}
    }

    for (const comm of comms) {
        let command = comm.split(' ');

        if (command.length > 1) {
            obj[command[0]](command[1]);
        } else {
            obj[command[0]]();
        }
    }
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])