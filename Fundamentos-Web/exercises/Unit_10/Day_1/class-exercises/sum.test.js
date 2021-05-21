const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

let myName = { firstName: 'Pedro'};
let identity = myName;

myName.firstName = 'Carol';

console.log(myName);
console.log(identity);
console.log(myName === identity);