let login = prompt("Введіть логін");
switch (login) {
    case "Admin":
        let password = prompt("Введіть пароль");
        switch (password) {
            case "TheMaster":
                console.log("Welcome!");
                break;
            case null:
                console.log("Canceled");
                break;
        
            default: console.log("Wrong password");
                break;
        }
        break;
    case null:
        console.log("Canceled");
        break;
    default: console.log("I don't know you");
        break;
}
