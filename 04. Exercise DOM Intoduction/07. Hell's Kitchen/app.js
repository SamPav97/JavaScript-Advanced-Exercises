function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let texts = JSON.parse(document.querySelector('div#inputs textarea').value);
      let rests = {};
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';

      for (let i = 0; i < texts.length; i++) {
         //This will give us the rest name as separate from all worker couples
         let [name, txtCouples] = texts[i].split(' - ');
         //This separates teh worker couples into their own list
         let nSal = txtCouples.split(', ');

         for (const person of nSal) {
            // I now split each worker couple into a worker and salary
            let [worker, salary] = person.split(' ');

            // Create a restaurant object if the name dont exist within the object of restaurants
            if (rests.hasOwnProperty(name) == false) {
               rests[name] = {};
            }
            // add workers to restaurant object.
            rests[name][worker] = Number(salary);
         }
      }
      // gives us all the entries for the object of restaurants
      let entries = Object.entries(rests);

      for (const entry of entries) {
         let key = entry[0];
         // all the name salaries:
         let values = Object.entries(entry[1]);
         // Now we wanna get the best avg Salary and restaurant name
         for (const [name, salary] of values) {
            totalSalary += salary
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0
         }
      }
      // we sort salries in the best restaurant, having obtained the name
      let res = Object.entries(rests[bestName]).sort((a, b) => b[1] - a[1])

      let print = '';

      res.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = 
      `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${res[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;

   }
}

["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]
