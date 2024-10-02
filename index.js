const DOMSelectors = {
    // header: document.querySelectorAll("h1"),
    items: document.querySelectorAll("li"),
    card: document.querySelector(".card"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
}

DOMSelectors.button.addEventListener("click", function (event){
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "red";
})

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
   console.log(document.querySelector("input").value);
   // 
})
