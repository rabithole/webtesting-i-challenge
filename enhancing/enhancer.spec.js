const { hello, succeed, fail, repair, get, sum } = require('./enhancer.js');
// test away!

describe('Enhancer.js File', () => {
    it('Hello World Test!', () => {
        expect(hello()).toBe('Hello Fucking World!');
    });

    it('sum of two numbers', () => {
        expect(sum(5,5)).toBe(10); 
    })

    it('repair process', () => {
        expect(repair(player)).toHaveProperty('durability', 100);
        expect(repair(player)).toHaveProperty('name');
    })
});

const player = {
    name: 'Joe',
    durability: 55, // Number from 0 to 100;
    enhancement: 4 // Number from 0 to 20
  }
