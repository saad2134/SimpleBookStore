

function makePayment() {
    var cardNumber = document.forms["paymentForm"]["cardNumber"].value.trim();
    var cardName = document.forms["paymentForm"]["cardName"].value.trim();
    var cardExpiry = document.forms["paymentForm"]["cardExpiry"].value.trim();
    var cardCVV = document.forms["paymentForm"]["cardCVV"].value.trim();
    var billingAddress = document.forms["paymentForm"]["billingAddress"].value.trim();

    

    

    if (cardNumber.length != 16) {
        alert("Please enter a valid 16-digit card number!")
        return false;
    }

    if (cardName == "") {
        alert("Please enter a valid card holder name!")
        return false;
    }

    if (cardExpiry.length != 5) {
        alert("Please enter a valid card expiry date in MM/YY format!")
        return false;
    }

    if (cardCVV.length != 3) {
        alert("Please enter a valid 3 digit card CVV!")
        return false;
    }

    if (billingAddress.length <= 6) {
        alert("Please enter a valid billing address!")
        return false;
    }

    alert("Payment Successful!");

    /* Redirect User to /order_confirmation */
    window.location.href = "order_confirmation.html";

    return true;
}
