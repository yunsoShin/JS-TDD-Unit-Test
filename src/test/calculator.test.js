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

describe('CAL',()=>{
    let cal 
    beforeEach(()=>{cal = new Calculator;})
    test('set',()=>{
        cal.set(2)
        expect(cal.value).toBe(2);
    })
    test('add',()=>{
        cal.add(1)
        expect(cal.value).toBe(1)
    })
    it('error value is greater than 100',()=>{
        expect(()=>{
            cal.add(300);
        }).toThrow();
    });

    test('subtract',()=>{
        cal.add(50)
        cal.subtract(20)
        expect(cal.value).toBe(30)
    })
    it('Divide',()=>{
        cal.set(20)
        cal.divide(2)
        expect(cal.value).toBe(10)
    })

    describe('Expressioin',()=>{
        it('0/0',()=>{
            cal.divide(0)
            expect(cal.value).toBe(NaN);
        })
    })

})

