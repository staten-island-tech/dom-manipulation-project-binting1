const DOMSelectors = {
    // header: document.querySelectorAll("h1"),
    card: document.querySelector(".card"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".formz"),
    container: document.querySelector(".container"),
    name: document.querySelector(".name"), 
    subject: document.querySelector(".subject"), 
    imgLink: document.querySelector(".img-link") 
}

DOMSelectors.form.addEventListener ("submit", function (event) { 
    event.preventDefault(); 
    console.log (DOMSelectors.name.value, DOMSelectors.subject.value, DOMSelectors.imgLink.value)

    
function createCard (){ 
     DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
            <h2 class="card-header">${DOMSelectors.name.value}</h2>
            <h4 class="subject">${DOMSelectors.subject.value}</h4>
            <img src="${DOMSelectors.imgLink.value}" alt="teacher image" class="card-img"></img>
            <button class="delete" type="click">Delete</button>
        </div>`
        
    )}
    createCard ()
    clearField ()
        remove ()
});

    function clearField () {
    DOMSelectors.name.value = ""
    DOMSelectors.subject.value =""
    DOMSelectors.imgLink.value = ""
    }

    function remove () {
    const button = document.querySelectorAll(".delete");
            button.forEach((button) => 
                button.addEventListener("click", function(button) {
                    button.target.parentElement.remove()
                }))};

