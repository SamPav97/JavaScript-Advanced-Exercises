class List{
    constructor(){
        this.lst = [];
        this.size = this.lst.length;
    }

    add(element) {
        this.lst.push(element);
        this.size ++;
        return this.lst.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < this.size && index >= 0){
        this.size --;
        return this.lst.splice(index, 1)
        }
    }

    get(index) {
        if (index < this.size && index >= 0){
        return this.lst[index]
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
console.log(list.size);
list.remove(1);
console.log(list.size);
console.log(list.get(1));
