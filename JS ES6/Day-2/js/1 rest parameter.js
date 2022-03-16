// rest parameter
function add(...varOne) {
  addResult = 0;
  varOne.forEach(function (value) {
    if (isNaN(value) === false) addResult += Number(value);
  });
  console.log(addResult);
}
add(10, 10, 4, 5, 7, 8, "4", 8, 8, 8, 8, "Deepak");

// (fat) arrow function =>
// class
// subclass
// static methods
