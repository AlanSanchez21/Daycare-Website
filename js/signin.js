const validateData = function() {
    let inputEmailLogin = document.querySelector("#input_email-login").value;
    let inputPasswordLogin = document.querySelector("#input_password-login").value;

    users = JSON.parse(localStorage.users);

    function validate_email(user) {
        return user.email === inputEmailLogin;
    }

    function validate_password(user) {
        return user.pass === inputPasswordLogin;
    }

    if (users.find(validate_email)) {

        if (users.find(validate_password)) {

            let result = users.filter(obj => {
                return obj.email === inputEmailLogin
            });


        localStorage.setItem("successfulLogin", JSON.stringify(result[0].name));


        location.replace("../html/shopping.html");

        } else {
            alert("Wrong email or password");
        }

    } else {
        alert("Wrong email or password");
    }
};

    if (document.getElementById("indexForm") != null) {
    document.querySelector("#indexForm").addEventListener("submit", function (e) {
        e.preventDefault();
        validateData();
    });
}