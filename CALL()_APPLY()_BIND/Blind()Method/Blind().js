//   Example 1

const john = {
    name: 'John',
    age: 24,
  };
  const jane = {
    name: 'Jane',
    age: 22,
  };

  function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }

  const deatails = greeting.bind(john)
  deatails()

  const deatail = greeting.bind(john)
  deatail()


  //   Example 2

  function greeting(lang) {
    console.log(`${lang}: I am ${this.name}`);
  }
  const john1 = {
    name: 'John'
  };
  const jane1 = {
    name: 'Jane'
  };
  const greetingJohn = greeting.bind(john, 'en');
  greetingJohn();
  const greetingJane = greeting.bind(jane, 'es');
  greetingJane();