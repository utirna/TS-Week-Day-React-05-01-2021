// variables init in js es6
// let & const

// destructuring in array
//let array = [100, "200", true, { name: "deepak" }];
//let [numberOne, numberTwo, numberThree, jsObject] = array;

// destructuring in jsObject
/*let student = {
  name: "Rohit",
  course: "MERN",
  duration: "5 months",
  address: {
    current: "Nashik",
    permanent: "Shirdi",
  },
};*/

//let { name: sName, duration: dur, course } = student;
//let {current,permanent} = student.address;

// spreed operator in array i.e ... => recreation & merge
let arrayOne = [10, 20, 30, 40];
let arrayTwo = [100, 200, 300, 400];
let arrayThree = [...arrayOne, ...arrayTwo];
//console.log(arrayThree);

//primitive ==> store data by value
// string , number , boolean
//let text = "testing shastra";
//let text2 = text;
//text = "javascript";

//& complex ==> store data by references
// array , jsObject
let text = ["texting shastra"];
let text2 = [...text]; /* emutable */
text[0] = "javascript";

console.log(text, text2);

// spreed operator in jsObject
// rest parameter
// (fat) arrow function =>
// class
// subclass
// static methods
