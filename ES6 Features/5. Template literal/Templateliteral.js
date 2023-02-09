const firstName = 'Ken';
const lastName = 'Huang';

// not use template literal

const name1 = ('Hello, My name is ' + firstName + ', ' + lastName);
console.log(name1);

// use template literal

const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;
console.log(nameWithLiteralString);