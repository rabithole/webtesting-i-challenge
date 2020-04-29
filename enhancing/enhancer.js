module.exports = {
  succeed,
  fail,
  repair,
  get,
  hello,
  sum,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

function hello() {
  // console.log('hell world');
  return 'hell world';
}

function sum(a,b) {
  return a + b;
}
