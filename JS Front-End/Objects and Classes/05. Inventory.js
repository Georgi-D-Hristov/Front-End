function Inventory (input){
    let hero = {};
    //let tokens = input.split(', ');
    let heroes = [];
    
    for(let item of input){
        let [heroName, level, items] = item.split(' / ');
        hero[heroName] = {heroName:heroName, level: Number(level), items: items.split(', ')};
        heroes.push(hero[heroName]);
    }

    heroes.sort((a,b)=>a.level-b.level);
    heroes.forEach(h => {
            console.log(`Hero: ${h.heroName}
            level => ${h.level}
            items => ${h.items.join(', ')}`);
        },
    );
}

Inventory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

Inventory([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);