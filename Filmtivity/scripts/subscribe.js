function subscribe() {
    let emailInput = document.getElementById("emailInput").value;
    let messageDiv = document.getElementById("message");

    if (emailInput.trim() === "") {
        messageDiv.innerHTML = "Please enter a valid email!";
        return;
    }

    messageDiv.innerHTML = `${emailInput}, you successfully subscribed to our Newspaper!`;
}
