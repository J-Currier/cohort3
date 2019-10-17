
import testFunctions from './calculator.js' 

test('tax payment', () => {
    expect(testFunctions.taxCalcTaxPayment(1)).toBe(.15); // Consider the edge cases
    expect(testFunctions.taxCalcTaxPayment(100)).toBe(15);
    expect(testFunctions.taxCalcTaxPayment(10)).toBe(1.5);
    expect(testFunctions.taxCalcTaxPayment(50000)).toBe(7630.35);
    
});
