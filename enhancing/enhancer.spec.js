const { hello } = require('./enhancer.js');
// test away!

describe('Enhancer.js File', () => {
    it('Hello World Test!', () => {
        expect(hello()).toBe('hello world');
    });

    // it('sum of two numbers', () => {
    //     const expectedOutput = sum 
    // })
});
