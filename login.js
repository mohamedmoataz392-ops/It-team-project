const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = form.querySelector("input[type='text']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();
    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }
    if(username.length < 3){
        alert("Username must be at least 3 characters");
        return;
    }
    if(password.length < 5){
        alert("Password must be at least 5 characters");
        return;
    }
    alert("Login successful");
    form.reset();
});
