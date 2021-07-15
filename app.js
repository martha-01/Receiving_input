let submitBtn = document.querySelector("#submitBtn");
let tbody = document.querySelector("#tbody");
submitBtn.addEventListener("click", function() {
    let entered_firstname = document.querySelector("#firstname").value;
    let entered_lastname = document.querySelector("#lastname").value;
    if (entered_firstname.trim() == "" || entered_lastname.trim() == ""){
        alert("Please enter full data!");
    }
    else {
    let new_firstname = document.createElement("td");
    let new_lastname = document.createElement("td");
    let new_row = document.createElement("tr");
    tbody.appendChild(new_row);
    new_row.appendChild(new_firstname);
    new_row.appendChild(new_lastname);
    new_firstname.innerHTML = entered_firstname;
    new_lastname.innerHTML = entered_lastname;
    document.querySelector("#firstname").value="";
    document.querySelector("#lastname").value="";
    }
});