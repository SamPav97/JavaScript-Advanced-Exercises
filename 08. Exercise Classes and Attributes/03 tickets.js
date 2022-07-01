function Tickets(list, sortBy){
    let lstOfTix = [];

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const tik of list) {
        let [dest, pr, stat] = tik.split('|');
        pr = Number(pr)
        lstOfTix.push(new Ticket(dest, pr, stat));
    }

    if (sortBy == "destination"){
    lstOfTix.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortBy == "price"){
        lstOfTix.sort((a, b) => a.price - b.price)
    } else {
        lstOfTix.sort((a, b) => a.status.localeCompare(b.status))
    }
    return lstOfTix
}

console.log((Tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')));