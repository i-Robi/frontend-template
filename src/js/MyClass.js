export default class MyClass {
  constructor(name) {
    this.name = name;
  }

  start() {
    const text = `Hello world, my name is ${this.name}!`;
    console.log(text);
  }
}
