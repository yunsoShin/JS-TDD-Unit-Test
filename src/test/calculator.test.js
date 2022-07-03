const Calculator = require('../calculator');

test('Cal', () => {
    const TestCalculator = new Calculator

    expect(TestCalculator.value).toBe(0);
    TestCalculator.set(2)
    expect(TestCalculator.value).toBe(2);
    TestCalculator.add(2);
    expect(TestCalculator.value).toBe(4);
    TestCalculator.subtract(1)
    expect(TestCalculator.value).toBe(3);
    TestCalculator.multiply(2)
    expect(TestCalculator.value).toBe(6);
    TestCalculator.divide(6)
    expect(TestCalculator.value).toBe(1);

    


});