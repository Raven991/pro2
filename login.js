const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {

    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    var data = [{
        username: "ahmad",
        password: "123"
    }, {
        username: "samir",
        password: "456"
    }, {
        username: "MR",
        password: "666"
    }];
    data.forEach(function(item, index) {
        if (username === item.username && password === item.password) {
            // If the credentials are valid, show an alert box and reload the page

            window.location.href = "file:///C:/Users/SAMSUNG/Desktop/Welcom%20page.html";

        } else {

            loginErrorMsg.style.opacity = 1;
        }

    });


})