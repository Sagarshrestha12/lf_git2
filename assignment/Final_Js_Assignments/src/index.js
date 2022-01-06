class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    //   this.sayBye = this.sayBye.bind(this);
  }
  sayHi = () => {
    console.log(`Hello from ${this.name}`);
  };
  sayBye = () => {
    console.log(`Bye from ${this.name}`);
  };
  get name() {
    return "Ferrari";
  }
}

class Bird extends Car {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
// bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
