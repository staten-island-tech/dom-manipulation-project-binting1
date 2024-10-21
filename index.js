const DOMSelectors = {
    // header: document.querySelectorAll("h1"),
    card: document.querySelector(".card"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
    container: document.querySelector(".container"),
    name: document.querySelector(".name"), 
    subject: document.querySelector(".subject"), 
    imgLink: document.querySelector(".img-link"), 
}

DOMSelectors.button.addEventListener("click", function (event){
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "gold";
})


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.querySelector(".name").value;
    const imgLink = document.querySelector(".img-link").value;
    const subject = document.querySelector(".subject").value;
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
            <h2 class="card-header">${name}</h2>
            <h4 class="subject">${subject}</h4>
            <img src="${imgLink}" alt="teacher image" class="card-img"></img>
            <button class="delete" type="click">Delete</button>
        </div>`
        
    )
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

