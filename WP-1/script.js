function showOnLoadMessage() {
    const formMessage = document.getElementById("formMessage"); formMessage.textContent = "Welcome! Please fill out the form.";
    }
    
    function showBlurMessage(fieldId) {
    const inputField = document.getElementById(fieldId + "Input"); const formMessage = document.getElementById("formMessage");
    if (inputField.value !== "") {
    formMessage.textContent = "You entered " + fieldId + ": " + inputField.value;
    } else { formMessage.textContent = "";
    }
    }
    
    function validateField(fieldId) {
    const inputField = document.getElementById(fieldId + "Input"); const formMessage = document.getElementById("formMessage");
    
    if (fieldId === "email") {
    const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i; if (!emailRegex.test(inputField.value)) {
    formMessage.textContent = "Please enter a valid email address."; inputField.focus();
    } else { formMessage.textContent = "";
    }
    }
    
    if (fieldId === "phone") {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/; if (!phoneRegex.test(inputField.value)) {
    formMessage.textContent = "Please enter a valid phone number XXXXXXXXXXX."; inputField.focus();
    } else { formMessage.textContent = "";
    }
    }
    }
    
    function resetForm() {
    const form = document.getElementById("userInfoForm"); form.reset();
    const formMessage = document.getElementById("formMessage"); formMessage.textContent = "";
    }
    
    function submitForm() {
    const name = document.getElementById("nameInput").value; const email = document.getElementById("emailInput").value; const phone = document.getElementById("phoneInput").value;
    
    const formMessage = document.getElementById("formMessage");
     
     
    
    