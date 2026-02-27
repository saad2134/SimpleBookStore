

function editProfile1() {
    document.getElementById("profile-edit-card").style.display = "block";
    document.getElementById("profile-details-card").style.display = "none";
}

function editProfile2() {
    var profileName = document.forms["profileeditForm"]["profileName"].value.trim();
    var profileEmail = document.forms["profileeditForm"]["profileEmail"].value.trim();
    var profilePhone = document.forms["profileeditForm"]["profilePhone"].value.trim();
    var profileAddress = document.forms["profileeditForm"]["profileAddress"].value.trim();
    var profilePassword = document.forms["profileeditForm"]["profilePassword"].value.trim();
    var profileCPassword = document.forms["profileeditForm"]["profileCPassword"].value.trim();

    
    if (profileName == "") {
        alert("Please enter your name!")
        return false;
    }

    if (profileEmail == "") {
        alert("Please enter your email!")
        return false;
    }

    if (profilePhone.length != 13) {
        alert("Please enter a valid mobile phone number with ISD code!")
        return false;
    }

    if (profileAddress.length <= 6) {
        alert("Please enter a valid address!")
        return false;
    }

    if (profilePassword.length <= 6) {
        alert("Password must be of more than 6 characters.")
        return false;
    }

    if (profilePassword != profileCPassword) {
        alert("Password & confirm password must match!")
        return false;
    }

    alert("Profile Updated Successfully!");

    return true;
}

function editProfileCancel() {
    document.getElementById('profile-edit-card').style.display = 'none';
    document.getElementById('profile-details-card').style.display = 'block';
}