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
/*let arrayOne = [10, 20, 30, 40];
let arrayTwo = [100, 200, 300, 400];
let arrayThree = [...arrayOne, ...arrayTwo];
let text = ["texting shastra"];
let text2 = text; //mutable 
text[0] = "javascript";
console.log(text, text2);
*/

// spreed operator in jsObject i.e ... => recreation & merge

/*let student = {
  name: "Rohit",
  course: "MERN",
  duration: "5 months",
  address: {
    current: "Nashik",
    permanent: "Shirdi",
  },
};*/

let studentDetails = {
  name: "Rohit",
  course: "MERN",
  duration: "5 months",
};
let address = {
  current: "Nashik",
  permanent: "Shirdi",
};

let student = { ...studentDetails, address: { ...address } };
let studentTwo = { ...student };

student.name = "deepak";

address.current = "pune";
console.log(student, studentTwo);
// rest parameter
// (fat) arrow function =>
// class
// subclass
// static methods
