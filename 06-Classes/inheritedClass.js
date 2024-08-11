class person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    console.log("A new Person Created");
  }
}

class programmer extends person {
  constructor(_name, _age, _language) {
    super(_name, _age);
    this.name = _name;
    this.age = _age;
    this._language = _language;
  }

  code() {
    return `${this.name} is a programmer &
        knows ${this._language}`;
  }
}

const john = new person("John", "32");

const jane = new programmer("Jane", "28", "JavaScript");
// console.log(jane.code());

console.log(john.code());
