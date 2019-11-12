import functions from './daily.js'
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types'


//2019-11-08 Daily Exercise Callback Exercise Part 1

const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

test('Western Provinces', () => {
    const westNameArr = functions.sortWest(people);
    expect(westNameArr.length)
        .toEqual(22);
    expect(westNameArr[0]).toEqual("Alex Smith");
});

// 2019-10-29 Daily Exercise-More Array Exercises find balance and average
test('total balance', () => {
    const staffforArray = data.staff;
    expect(functions.staffBalance(staffforArray))
        .toEqual(3823);
});

test('total average', () => {
    const staffforArray = data.staff;
    expect(functions.staffAverage(staffforArray))
        .toBeCloseTo(546.14, 2);
});


// 2019-10-25 Daily Exercise-Email list
test('email builder map callback company', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email builder forEach callback company', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


// 2019-10-24 Daily Exercise-Email list
test('email builder forin company', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email builder forof company', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


//2019-10-6 Daily Exercise
test('check parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false); // Consider the edge cases
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true); 
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);

});

test('practice test', () => {
    console.log("hello world");

});

//2019-10-9 Daily Exercise
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// 2019-10-15 Daily Exercise
test('for loop', () => {
    expect(functions.forloopdaily(5)).toEqual([0, 1, 2, 3, 4]);
});

test('while loop', () => {
    expect(functions.whileLoop(5)).toEqual("01234");
});

test('do while loop', () => {
    expect(functions.doWhileLoop(0)).toEqual([0]);
    expect(functions.doWhileLoop(3)).toEqual([0, 1, 2]);
});

test('for in loop', () => {
    expect(functions.forInLoop({fname:"John", lname:"Doe", age:25})).toEqual("JohnDoe25");
});

test('for of loop', () => {
    expect(functions.forOfLoop("hello there")).toEqual(11);
});

//2019-10-15 Daily Exercise
test('sliceEx', () => {
    expect(functions.sliceEx(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Lemon", "Apple", "Mango"]);
});

test('splicer', () => {
    expect(functions.splicer(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Banana", "kiwi", "pumpkin", "grapes", "Apple", "Mango"]);
});


test('forEach', () => {
    expect(functions.forEach(["Banana", "Orange", "Mango"])).toBe(3);
});

test('map', () => {
    expect(functions.mapping([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('filter', () => {
    expect(functions.filtering([1, 2, 3, 4])).toEqual([1, 2]);
});

test('reduce', () => {
    expect(functions.reducing([1, 2, 3, 4])).toEqual(10);
});

test('sort', () => {
    expect(functions.sorter(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Apple", "Banana", "Lemon", "Mango", "Orange"]
    );
});
