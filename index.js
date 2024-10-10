const DOMSelectors = {
    // header: document.querySelectorAll("h1"),
    card: document.querySelector(".card"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
    container: document.querySelector(".container"),
}

DOMSelectors.button.addEventListener("click", function (event){
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "pink";
})

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(document.querySelector("input").value);

});

const buttons = document.querySelectorAll("button");

const newButtons = Array.from(buttons);

newButtons.forEach((button) => (button.style.backgroundColor = "lightblue")); 

newButtons.forEach((button) => 
    button.addEventListener("click", function(event) {
        console.group(event.target.textContent)
    }));


let student = "john"
DOMSelectors.container.insertAdjacentHTML("beforeend", `<div class = "card"> <h2 class = "card-header">${student}</h2></div>`);



// create the HTML for inputs, card and container aka where the ards go 
//select/query the HTML form and get values from in[uts 
//turn values into object Movie, Game, User, whatevs 
//insert card with object onto HTML 
//add event listerner for remove button in JS 



// const students = ["peter", "chris", "kim"];
// console.log(students[0]);

// students.forEach((student) => console.log(student));
// const student = [{
//     name: "chris", 
//     age: 15, 
//     graduated: false,
// },
// {
//     name: "yifan", 
//     age: 18, 
//     graduated: false,ocument.querySelector("input").value);
//    // 
// })

// },
// {
//     name: "peter", 
//     age: 16, 
//     graduated: false,
// },
// ];

// // student.forEach((student) => console.group(student.name));

// const newArr = students.filter((student) => student.graduated === false);
// // !== equals not false 
// console.log(newArr);

// // another format 
// student 
//     .filter((student) => student.graduated === false) 
//     .forEach((student) => console.log(student.name));

// // for loop is the following 

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// function (a,b) {
//     let a = 5 
//     return a + b; 
// }
// is essentially the following command 

// (a,b) => return a +b 