function towns(input){
    let town = {};

    for(let townsInfo of input){
        let townItems = townsInfo.split(' | ');

        town.town = townItems[0];
        town.latitude = Number(townItems[1]).toFixed(2);
        town.longitude = Number(townItems[2]).toFixed(2);

        console.log(town);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );
towns(['Plovdiv | 136.45 | 812.575']);