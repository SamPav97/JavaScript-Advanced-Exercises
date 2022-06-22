function cars(input) {
    const data = {};

    const commandsMap = {
        create: (name, inherits, parentName) => {
            data[name] = inherits ? Object.create(data[parentName]) : {};
        },
        set: (name, k, v) => data[name][k] = v,
        print: name => {
            const entries = [];
            for (const key in data[name]) {
                entries.push(`${key}:${data[name][key]}`);
            }
            console.log(entries.join(','));
        },
    }

    input.forEach(x => {
        const [command, name, k, v] = x.split(" ");
        commandsMap[command](name, k, v);
    });
}



cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])




















// function cars (lst) {
//     let objs = [];

//     let funx = {
//         create (objName) { let obj = {name: objName}
//     objs.push(obj)},

//         create
//     }
// }




