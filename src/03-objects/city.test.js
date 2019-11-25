import { City, Community } from "./city.js";


test('account check', () => {
    const newCity = new City("My City", -51.0447, 114.0719, 1234567, 1);
    expect(newCity.name).toEqual("My City");
    expect(newCity.latitude).toEqual(-51.0447);
    expect(newCity.show()).toEqual("My City -51.0447 114.0719 1234567");
    newCity.movedIn(1);
    expect(newCity.population).toEqual(1234568);
    newCity.movedOut(2);
    expect(newCity.population).toEqual(1234566);
    expect(newCity.howBig()).toEqual('City');
});


test('community controller', () => {
    const myCommunity = new Community('Alberta');

    myCommunity.createNewCity('Paris', 48.8566, -2.3522, 2140000);
    myCommunity.createNewCity('Rome', 41.9028, -12.4964, 2810000);
    myCommunity.createNewCity('Conquista do Oeste', -14.5367, 59.5469, 94);
    expect(myCommunity.communityName).toEqual('Alberta');
    expect(myCommunity.cityList.length).toEqual(3);
    myCommunity.removeCity('Rome');
    expect(myCommunity.cityList.length).toEqual(2);
    expect(myCommunity.getPopulation()).toStrictEqual(2140094);
    let mostNorth = myCommunity.mostNorthern();
    expect(mostNorth.name).toEqual("Paris");
    let mostSouth = myCommunity.mostSouthern();
    expect(mostSouth.name).toEqual("Conquista do Oeste");
    expect(myCommunity.whichSphere('Paris')).toEqual("Northern Hemisphere");
    expect(myCommunity.whichSphere('Conquista do Oeste')).toEqual("Southern Hemisphere");


//     let lowestBalanceA = PeterPan.lowestBalance();
//     console.log(lowestBalanceA, 'test');
//     expect(lowestBalanceA.balance).toEqual(100.00);

});