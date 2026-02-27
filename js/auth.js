
function registerUser() {
    var name = document.forms["registerForm"]["regName"].value.trim();
    var email = document.forms["registerForm"]["regEmail"].value.trim();
    var phone = document.forms["registerForm"]["regPhone"].value.trim();
    var address = document.forms["registerForm"]["regAddress"].value.trim();
    var password = document.forms["registerForm"]["regPassword"].value.trim();
    var cpassword = document.forms["registerForm"]["regCPassword"].value.trim();

    if (name == "") {
        alert("Please enter your name!")
        return false;
    }

    if (email == "") {
        alert("Please enter your email!")
        return false;
    }

    if (phone.length != 13) {
        alert("Please enter a valid mobile phone number with ISD code!")
        return false;
    }

    if (address.length <= 6) {
        alert("Please enter a valid address!")
        return false;
    }

    if (password.length <= 6) {
        alert("Password must be of more than 6 characters.")
        return false;
    }

    if (password != cpassword) {
        alert("Password & confirm password must match!")
        return false;
    }

    alert("Account Creation Successful!");

    /* Redirect User to /profile */
    window.location.href = "profile.html";

    return true
}


function loginUser1() {
    /* Can be a email or phone no. */
    var userId = document.forms["loginForm"]["loginEmail"].value.trim(); 

    if (userId == "") {
        alert("Please enter your email or phone number!")
        return false;
    }

    alert("Account Login Successful!");

    /* Redirect User to /profile */
    window.location.href = "profile.html";

    return true
}
