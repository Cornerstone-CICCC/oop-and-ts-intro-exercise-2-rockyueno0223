// Exercise 2: Method Overriding, Private Properties, and Getter
//
// 1. Create a class `Animal` with a private property `#type` and a getter `getType` to access the private property.
// 2. The `Animal` class should have a method `speak()` that returns "The [type] makes a sound" using the getter.
// 3. Create a subclass `Dog` that overrides the `speak()` method to return "The dog barks", but still use the getter in the subclass.
// 4. Create another subclass `Cat` that overrides the `speak()` method to return "The cat meows", but still use the getter in the subclass.


class Animal {
  #type;

  constructor(type) {
      this.#type = type;
  }

  getType() {
      return this.#type;
  }

  speak() {
      return `The ${this.getType()} makes a sound`;
  }
}

class Dog extends Animal {
  // YOUR CODE HERE

  constructor() {
    super("dog")
  }

  speak() {
    return `The ${super.getType()} barks`
  }
}

class Cat extends Animal {
  // YOUR CODE HERE

  constructor() {
    super("cat")
  }

  speak() {
    return `The ${super.getType()} meows`
  }
}


// Test Code / Driver Code
const dog = new Dog();
const cat = new Cat();

console.log(dog.speak());  // Expected Output: "The dog barks"
console.log(cat.speak());  // Expected Output: "The cat meows"
