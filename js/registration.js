class User {
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}

let users = [];

const addUser = function () {

    let inputName = document.querySelector("#input_name").value
    let inputEmail = document.querySelector("#input_email").value;
    let inputAge = document.querySelector("#input_age").value;
    let inputPassword = document.querySelector("#input_password").value;

    if (inputEmail.search('@') != -1)
    {
        let data = {
            name: inputName,
            email: inputEmail,
            age: inputAge,
            pass: inputPassword
        };


        if (localStorage.users != null) {
            users = JSON.parse(localStorage.users);
        }

        users.push(data);

        localStorage.setItem("users", JSON.stringify(users));

        location.replace("../index.html");
    }
    else {
        alert("Invalid Email. Insert a valid Email");
    }
};


if (document.getElementById("form") != null) {
    document.querySelector("#form").addEventListener("submit", function (e) {
        e.preventDefault();
        addUser();
    });
}