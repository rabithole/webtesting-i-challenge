module.exports = {
  succeed,
  fail,
  repair,
  get,
  hello,
  sum,
};

// const player = {
//   name: 'Joe',
//   durability: 55, // Number from 0 to 100;
//   enhancement: 18 // Number from 0 to 20
// }

function succeed(item) {
  item.enhancement === 20 ? item.enhancement : item.enhancement = item.enhancement + 1;
  return { ...item };
}

// succeed(player);
// fail(player)
// get(player)

function fail(item) {
  item.enhancement < 15 ? item.enhancement = item.enhancement - 5 : item.enhancement; 
  item.enhancement < 0 ? item.enhancement = 0 : item.enhancement; 
  item.enhancement === 15 || item.enhancement === 16 ? item.enhancement = item.enhancement - 10 : item.enhancement;
  item.enhancement > 16 ? item.enhancement = item.enhancement - 1 : item.enhancement;
  console.log('enhancer.js', item)

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  item.enhancement > 0 ? item.name = '[+' + item.enhancement + ']' + ' ' + item.name : item.name;
  return { ...item };
}

function hello() {
  // console.log('hell world');
  return 'Hello Fucking World!';
}

function sum(a,b) {
  return a + b;
}
