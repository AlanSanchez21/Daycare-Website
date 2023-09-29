/*class Registration{
    constructor(pName, kName, age, email, password, medInfo) {
        this.pName = pName;
        this.kName = kName;
        this.age = age;
        this.email = email;
        this.password = password;
        this.medInfo = medInfo;
    }
}

let registration = [];


const addUser = function () {

    let inputPname = document.querySelector("#input_RegistrationPname").value;
    let inputKname = document.querySelector("#input_Kname").value;
    let inputAge = document.querySelector("#input_age").value;
    let inputEmail = document.querySelector("#input_email").value;
    let inputPassword = document.querySelector("#input_password").value;
    let inputMedinfo = document.querySelector("#input_MedInfo").value

    if (inputEmail.search('@') != -1) 
    {
        let datos = {
            pName: inputPname,
            kName: inputKname,
            age: inputAge,
            email: inputEmail,
            pass: inputPassword,
            medInfo: inputMedinfo,
        };


        if (localStorage.registration != null) {
            registration = JSON.parse(localStorage.registration);
        }

        registration.push(datos);

        localStorage.setItem("registration", JSON.stringify(registration));

        location.replace("../register.html");
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
}*/

/*
class Usuario {
    constructor(nombre, username, email, password) {
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


let usuarios = [];


const agregarUsuario = function () {


    let inputEmail = document.querySelector("#input_email").value;
    let inputUsername = document.querySelector("#input_username").value;
    let inputPassword = document.querySelector("#input_password").value;

    if (inputEmail.search('@') != -1) // 
    {
        let datos = {
            email: inputEmail,
            username: inputUsername,
            pass: inputPassword
        };


        if (localStorage.usuarios != null) {
            usuarios = JSON.parse(localStorage.usuarios);
        }

        usuarios.push(datos);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        location.replace("../index.html");
    }
    else {
        alert("Debe ingresar un email válido");
    }
};


if (document.getElementById("formulario") != null) {
    document.querySelector("#formulario").addEventListener("submit", function (e) {
        e.preventDefault();
        agregarUsuario();
    });
}
*/


