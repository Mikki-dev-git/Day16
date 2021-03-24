const firstName = (firstName) => {
  return firstName.toUpperCase();
};

const lastName = (lastName) => {
  return lastName.toLowerCase();
};

console.log(firstName("Mirza"));
console.log(lastName("Kopic"));

exports.firstName = firstName;
exports.lastName = lastName;

module.exports = firstName;
