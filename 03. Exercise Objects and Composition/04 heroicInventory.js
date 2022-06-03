function heroicInventory(lst) {
    const res = [];

    for (const hero of lst) {
        let [name, level, items] = hero.split(' / ');

        level = Number(level);

        items = items ? items.split(', '): [];

        res.push({name, level, items});
    };

    console.log(JSON.stringify(res));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)