class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        if (this.departments.hasOwnProperty(department) == false) {
            this.departments[department] = {};
        }

        this.departments[department][name] = { salary, position };
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    bestDepartment() {
        let highest = 0;
        let highestDep = '';
        let res = '';

        for (const dep of Object.entries(this.departments)) {
            let currentTotal = 0;
            let count = 0;

            //it does not get the values here.check them
            for (const person of Object.entries(this.departments[dep[0]])) {
                currentTotal += person[1]['salary']
                count += 1
            }

            if ((currentTotal / count) > highest) {
                highest = currentTotal / count;
                highestDep = dep;
            }
        }
        res += `Best Department is: ${highestDep[0]}\n Average salary: ${highest.toFixed(2)}`

        console.log(typeof highestDep[1]);
        let obj = highestDep[1];
        // I HAVE NO IDEA HOW TO SORT THIS SHIT. ITS AN OBJECT OF KEY VALUES WHERE THE VALUE IS ALSO AN OBJECT WITH KEY VALUE PAIRS
        let x = obj.sort(function (vote1, vote2) {

            // Sort by votes
            // If the first item has a higher number, move it down
            // If the first item has a lower number, move it up
            if (vote1.salary > vote2.salary) return -1;
            if (vote1.salary < vote2.salary) return 1;

        });

        console.log(highestDep[1]);



        // let byLetters = Object.keys(highestDep[1]).sort((a, b) => a.localeCompare(b));

        // for (const name of byLetters) {
        //     console.log(Object.keys(highestDep[name]['salary']));


        //     // for (const product of sortedProducts) {
        //     //     console.log(`  ${product}: ${catalogue[letter][product]}`);
        //     // }
        // }

        // let str1 = `Best Department is: {best department's name}`
    }
}



let c = new Company();
c.addEmployee("Betam", 1000, "engineer", "Construction");
c.addEmployee("Alan", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "showtime");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
