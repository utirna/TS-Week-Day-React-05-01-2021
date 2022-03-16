// rest parameter
function add(...varOne) {
  addResult = 0;
  varOne.forEach(function (value) {
    if (isNaN(value) === false) addResult += Number(value);
  });
  console.log(addResult);
}

// class
class Circle {
  constructor(_rad) {
    this.radius = _rad; // property
  }

  draw() {
    // let radius = 15;
    console.log(this.radius);
  } // method
} // class def

let circleObject = new Circle(20); //constructor
circleObject.draw();

//alert("hello");

// subclass
// static methods
// (fat) arrow function =>
