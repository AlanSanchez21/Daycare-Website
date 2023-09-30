class Contact{
    constructor(comment, email) {
        this.comment = comment;
        this.email = email;
    }
}

let contact = [];


const addUser = function () {

    let inputPname = document.querySelector("#input_RegistrationPname").value;
    let inputEmail = document.querySelector("#input_email").value;

    if (inputEmail.search('@') != -1) 
    {
        let datos = {
            comment: inputPname,
            email: inputEmail
        };


        if (localStorage.contact != null) {
            contact = JSON.parse(localStorage.contact);
        }

        contact.push(datos);

        localStorage.setItem("contact", JSON.stringify(contact));

        location.replace("../index.html");
    }
    else {
        alert("You need to insert a valid email");
    }
};


if (document.getElementById("form") != null) {
    document.querySelector("#form").addEventListener("submit", function (e) {
        e.preventDefault();
        addUser();
    });
}