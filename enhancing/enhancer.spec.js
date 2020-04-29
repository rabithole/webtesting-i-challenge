const { hello, succeed, fail, repair, get, sum } = require('./enhancer.js');
// test away!

describe('Enhancer.js File', () => {
    it('Hello World Test!', () => {
        expect(hello()).toBe('Hello Fucking World!');
    });

    // it('sum of two numbers', () => {
    //     const expectedOutput = sum 
    // })
});
