function FilterEmps(data, criteria) {
    let people = JSON.parse(data);
    let matches = [];
    
    if(criteria != 'all') {
        let [crit, type] = criteria.split('-');
        for (let i = 0; i < people.length; i++) {
            if (people[i][crit] == type) {
                matches.push(people[i]);
            }   
        }
    } else {
        matches = people
    }


    for (let i = 0; i < matches.length; i++) {
        console.log(`${i}. ${matches[i].first_name} ${matches[i].last_name} - ${matches[i].email}`);
        
    }
}


FilterEmps(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)