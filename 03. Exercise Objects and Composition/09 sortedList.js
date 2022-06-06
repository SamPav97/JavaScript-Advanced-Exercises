// With object:
// function createSortedList() {
//     let res = {arr: [], size: 0};
//     let obj = {
//         add: function(element) {
//             res.arr.push(element);
//             res.arr.sort((a, b) => a - b);
//             obj.size = res.arr.length //obj.size?

//             return res
//         },
//         remove: function(index) {
//             if (res.arr[index] != undefined) {
//             res.arr.splice(index, 1);
//             res.arr.sort((a, b) => a - b);
//             obj.size = res.arr.length;
//             }
//         },
//         get: function(index) {
//             index = Number(index);
//             if (res.arr[index] != undefined) {

//             let re = res.arr[index];
//             return re;
//             }
//         },
//         size: res.arr.length,
//     };
//     return obj;
// }


// With Class:
function createSortedList() {
    class SortedList {
        constructor() {
            this.arr = []
            this.size = 0
        }

        add(element) {
            this.arr.push(element);
            this.arr.sort((a, b) => a - b);
            this.size++;
        }

        remove(index) {
            if (this.arr[index] != undefined) {
                this.arr.splice(index, 1);
                this.arr.sort((a, b) => a - b);
                this.size--;
            }
        }
        get(index) {
            index = Number(index);
            if (this.arr[index] != undefined) {
                let re = this.arr[index];
                return re;
            }
        }

    }
    return new SortedList()
}





let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
