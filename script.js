function validEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function belep(){
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    if (!validEmail(email)) {
        alert("Hibás e-mail!");
        return;
    }
    if (pwd.trim() == "") {
        alert("A jelszó nem lehet üres!");
        return;
    }

    let pwdcheck = localStorage.getItem(email);
    if (pwdcheck == null || pwdcheck == "" || pwdcheck != pwd) {
        alert("Hibás jelszó!");
        return;
    }
    

    alert("Sikeres bejelentkezés!");
    localStorage.setItem("loggedInUser", email);
}


function regist(){
    let email = document.getElementById('email').value;
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;
    if (!validEmail(email)) {
        alert("Hibás e-mail!");
        return;
    }
    if (pwd1 == "" || pwd2 == "") {
        alert("A jelszó mező nem lehet üres!");
        return;
    }
    if (pwd1 != pwd2) {
        alert("A két jelszó eltér!");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Az email foglalt!");
        return;
    }
    localStorage.setItem(email, pwd1);
    alert("Sikeres regisztráció!");
    window.location.href = "bejelentkezes.html";
}