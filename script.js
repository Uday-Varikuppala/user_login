function getAll(){
    alert("Fetching all users");
    var userTable = document.getElementById("userTable");
    userTable.innerHTML = ""; // Clear table for refresh
    
    for (var index = 0; index < localStorage.length; index++) {
        var key = localStorage.key(index);
        var val = localStorage.getItem(key);

        var row = `<tr>
            <td>${key}</td>
            <td>${val}</td>
            <td><input type="button" onclick="edit('${key}')" value="Edit"></td>
            <td><input type="button" onclick="delet('${key}')" value="Delete"></td>
        </tr>`;
        userTable.innerHTML += row;
    }
}

function save(){
    var loginname = document.getElementById("loginname").value;
    var password = document.getElementById("password").value;
    
    if (loginname === "") {
        alert("Please enter a login name");
        document.getElementById("loginname").focus();
        return;
    }

    if (password === "") {
        alert("Please enter a password");
        document.getElementById("password").focus();
        return;
    }

    localStorage.setItem(loginname, password);
    alert("User saved");
    getAll();
}

function update(){
    var loginname = document.getElementById("loginname").value;
    var password = document.getElementById("password").value;

    if (!localStorage.getItem(loginname)) {
        alert("User not found for updating");
        return;
    }

    localStorage.setItem(loginname, password);
    alert("User updated");
    getAll();
}

function delet(loginname){
    if (confirm("Are you sure you want to delete this user?")) {
        localStorage.removeItem(loginname);
        alert("User deleted");
        getAll();
    }
}

function edit(loginname){
    document.getElementById("loginname").value = loginname;
    document.getElementById("password").value = localStorage.getItem(loginname);
}
