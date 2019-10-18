
import testFunctions from './calculator.js' 

// test('tax payment', () => {
//     expect(testFunctions.taxCalcTaxPayment(1)).toBe(.15); // Consider the edge cases
//     expect(testFunctions.taxCalcTaxPayment(100)).toBe(15);
//     expect(testFunctions.taxCalcTaxPayment(10)).toBe(1.5);
//     expect(testFunctions.taxCalcTaxPayment(50000)).toBe(7630.35);
//     expect(testFunctions.taxCalcTaxPayment(100000)).toBe(18141.11);
//     expect(testFunctions.taxCalcTaxPayment(150000)).toBe(31211.10);
//     expect(testFunctions.taxCalcTaxPayment(250000)).toBe(61796.26);
    
// });

// test('tax payment', () => {
//     expect(testFunctions.netIncome(1)).toBe(.85); // Consider the edge cases
//     expect(testFunctions.netIncome(100)).toBe(85);
//     expect(testFunctions.netIncome(10)).toBe(8.5);
//     expect(testFunctions.netIncome(50000)).toBe(42369.65);
//     expect(testFunctions.netIncome(100000)).toBe(81858.89);
//     expect(testFunctions.netIncome(150000)).toBe(118788.90);
//     expect(testFunctions.netIncome(250000)).toBe(188203.74);
    
// });

// test('effective tax rate', () => {
//     expect(testFunctions.effectiveTaxRate(1)).toBeCloseTo(15.00, 2); // Consider the edge cases
//     expect(testFunctions.effectiveTaxRate(100)).toBeCloseTo(15.00, 2);
//     expect(testFunctions.effectiveTaxRate(10)).toBeCloseTo(15.00, 2);
//     expect(testFunctions.effectiveTaxRate(50000)).toBeCloseTo(15.26, 2);
//     expect(testFunctions.effectiveTaxRate(100000)).toBeCloseTo(18.14, 2);
//     expect(testFunctions.effectiveTaxRate(150000)).toBeCloseTo(20.81, 2);
//     expect(testFunctions.effectiveTaxRate(250000)).toBeCloseTo(24.72, 2);
    
// });

// test('Array Add', () => {
//     expect(testFunctions.arrAdd([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]); // Consider the edge cases
// });

test('Array Total', () => {
    expect(testFunctions.arrTotal([1, 2, 3])).toStrictEqual(6); // Consider the edge cases
});