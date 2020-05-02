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

    it('Enhancement success!', () => {
        const playEnhance = playerSuccess.enhancement;
        const playerEnhanced = playEnhance + 1;

        expect(succeed(playerSuccess)).toHaveProperty('enhancement', playerEnhanced);
    })

    it('Enhancement Fail', () => {        
        expect(fail(playerFail)).toHaveProperty('enhancement', 0);
    })

    // it('Modify name with enhancement level', () => {
    //     expect(get(playerGet)).toContain('[');
    // })
});

const player = {
    name: 'Joe',
    durability: 55, // Number from 0 to 100;
    enhancement: 14 // Number from 0 to 20
}

const playerGet = {
    name: 'Joe',
    durability: 55, // Number from 0 to 100;
    enhancement: 2 // Number from 0 to 20
}

const playerSuccess = {
    name: 'Joe',
    durability: 55, // Number from 0 to 100;
    enhancement: 14 // Number from 0 to 20
}

const playerFail = {
    name: 'Joe',
    durability: 55, // Number from 0 to 100;
    enhancement: 4 // Number from 0 to 20
}


