class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getPerson() {
    let personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
    return personInfo;
  }
}
let personOne = new Person("Mirza", "mirza.kopic@live.com", 24);
console.log(personOne.getPerson());

exports.Person = Person;
module.exports = Person;
