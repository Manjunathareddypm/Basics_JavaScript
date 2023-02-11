function greet(greeting, lang) {
    console.log(lang);
    console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
  }
  const john = {
    name: 'John',
    age: 24,
  };
  const jane = {
    name: 'Jane',
    age: 22,
  };

  greet.apply("jonh", ["hi", "hello"])
  greet.apply("jane", ["hi", "hello"])