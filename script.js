
document.getElementById("studentForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    document.getElementById("message").textContent =
        "Student registered successfully!";

    console.log("Name:", name);
    console.log("Roll Number:", roll);
    console.log("Email:", email);
    console.log("Department:", department);

    document.getElementById("studentForm").reset();
});
