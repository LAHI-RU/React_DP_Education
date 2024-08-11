class Animal {
  constructor() {
    console.log("An Animal is Created.");
  }

  makeSound() {
    console.log("Animals Genaraly make sounds");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log("A Dog is Created");
  }
  makeSound() {
    console.log("Dogs Normaly Bark");
  }
}

class Cat extends Animal {
  constructor() {
    super();
    console.log("A Cat is Created;");
  }
  makeSound() {
    console.log("Cats ... Meow meow...");
  }
}

// const someAnimal = new Animal;
// someAnimal.makeSound();

const tommy = new Dog();
tommy.makeSound();

const lassy = new Cat();
lassy.makeSound();
