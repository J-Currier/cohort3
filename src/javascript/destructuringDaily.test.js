import functions from './destructuringDaily.js'

const listOfPeople = [
    {gender: "male",
    name: "Ιωάννης",
    region: "Greece",
    surname: "Μιχαηλίδης"},

    {gender: "female",
    name: "Lia",
    region: "Romania",
    surname: "Rusescu"},

    {gender: "male",
    name: "Marc",
    region: "Spain",
    surname: "Cruz"},

    {gender: "male",
    name: "Eduardo",
    region: "Mexico",
    surname: "Zárate"},

    {gender: "male",
    name: "İsmet",
    region: "Turkey",
    surname: "Ünal"}

];
test('destruc', () => {
    functions.destrucFunction(listOfPeople);
    expect(functions.myNameArr)
        .toEqual(["Ιωάννης","Lia","Marc","Eduardo","İsmet"]);
});
