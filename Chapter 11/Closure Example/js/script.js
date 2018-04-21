function multN(n) {
  return function multBy(m) {
    return n * m;
  };
}

function makePassword(password) {
  return function guess(passwordGuess) {
    return passwordGuess === password;
  };
}

var secretPassword = makePassword("secret");
console.log(secretPassword("durr"));
console.log(secretPassword("secret"));
