const DOMSelectors = {
    header: document.querySelectorAll("h1"),
    items: document.querySelectorAll("li"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
}

let student = {
    name:"ryan",
    age: 15,
    girlfriend: true,
};

console.log(student.items);

DOMSelectors.button.addEventListener("click", function (event){
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "red";
})

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
   console.log(document.querySelector("input").value);
})