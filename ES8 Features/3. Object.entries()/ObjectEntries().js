const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(exampleObj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

// Usually used with for

for (const [key, value] of Object.entries(exampleObj)) {
	console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4