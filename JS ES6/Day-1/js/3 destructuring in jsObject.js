// variables init in js es6
// let & const

// destructuring in array
//let array = [100, "200", true, { name: "deepak" }];
//let [numberOne, numberTwo, numberThree, jsObject] = array;

// destructuring in jsObject
let student = {
  name: "Rohit",
  course: "MERN",
  duration: "5 months",
  address: {
    current: "Nashik",
    permanent: "Shirdi",
  },
};

let { name: sName, duration: dur, course } = student;
let { current, permanent } = student.address;

console.log(sName);
console.log(course);
console.log(dur);
console.log(address);

// spreed operator in array
// spreed operator in jsObject
// rest parameter
// (fat) arrow function =>
// class
// subclass
// static methods
