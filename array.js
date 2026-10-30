// let students= ["ajitha","divya","priya","Aasha"]

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// //push method
// students.push("harini");

// console.log(students);


//crete an object

// let students_details ={
//     name:"ajitha",
//     age:21,
//     city:"dindugal",
//     course:"full stack"
// };

// console.log(students_details);
// console.log(students_details.name);
// console.log(students_details.age);


//update an object
// students_details.age=22;
// students_details.name="priya";
// console.log(students_details);


//array of object and loop


// let students = [
//     { name:"Ajitha",mark:85 },
//     { name:"Priya",mark:30 },
//     { name:"Divya",mark:75 },
//     { name:"Kumar",mark:25 },
//     { name:"Arun",mark:60 }
// ];

// for (let i = 0; i < students.length; i++) {

//     if (students[i].mark >= 35) {
//         console.log(students[i].name + "  Passed");
//     }
//     else {
//         console.log(students[i].name + " Failed");
//     }

// }



// let marks = [85, 70, 90, 65, 80];
// let total = 0;
// let average = total / marks.length;

// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }
// console.log("Total Marks:", total);
// console.log("Average Marks:", average);



let students = [
    { name: "Ajitha", mark: 85 },
    { name: "Priya", mark: 90 },
    { name: "Divya", mark: 75 },
    { name: "Kumar", mark: 60 },
    { name: "Arun", mark: 95 }
];
let highest = students[0].mark;
let topper = students[0].name;
for (let i = 0; i < students.length; i++) {
    if (students[i].mark > highest) {
        highest = students[i].mark;
        topper = students[i].name;
    }
}
console.log("Highest Mark:", highest);
console.log("Topper Name:", topper);





// let products = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1000, quantity: 1 },
//     { name: "Headphone", price: 1500, quantity: 0 }
// ];

// let total = 0;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity > 0) {
//         let amount = products[i].price * products[i].quantity;
//         console.log(products[i].name + " = " + amount);
//          total = total + amount;
//     }
// }
// console.log("Total Shopping Amount = " + total);




// let students = [
//     { name: "Ajitha",age: 21 },
//     { name: "Priya",age: 22 },
//     { name: "Divya",age: 23 },
//     { name: "Aasha",age: 24 }
// ];
// let searchName = "Divya";
// let found = false;
// for (let i = 0; i < students.length; i++) {
// if (students[i].name === searchName) {
//     console.log("Student Found");
//     console.log("Name:",students[i].name);
//     console.log("Age:",students[i].age);

//     found = true;
//     break;
//     }
// }
// if (found === false) {
//     console.log("Student Not Found");
// }
git 