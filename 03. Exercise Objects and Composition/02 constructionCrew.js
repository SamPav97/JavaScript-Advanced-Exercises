function constructionCrew(obj) {
    //if true water intake
    //0.1ml per kilo per yr of exp
    //add to curr hydration
    //make false

    if(obj.dizziness) {
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience
        obj.dizziness = false
    }

    return obj
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));