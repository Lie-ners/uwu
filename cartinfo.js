function submitForm() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display the alert message
    alert("A e-reciept will be sent to your email. Thank you for shopping with us at Student Store! We hope to see you again!");

    // Redirect to "pg1.html"
    window.location.href = "index.html";
}