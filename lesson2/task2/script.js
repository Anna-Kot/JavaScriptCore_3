
let login = prompt("Введіть логін");
if (login=="Admin") {
    let password = prompt("Введіть пароль");
    if (password=="TheMaster") {
        console.log("Welcome!");
    }
    else if(password==null) {
        console.log("Canceled");
    }
    else {
        console.log("Wrong password");
    }
}
else if (login==null) {
    console.log("Canceled");
}
else {
    console.log("I don't know you");
}

