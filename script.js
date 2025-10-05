
function validEmail(cim) {
    const minta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return minta.test(cim);
}

function belep() {
    const email = document.getElementById("email").value.trim();
    const jelszo = document.getElementById("pwd").value;

    if (!validEmail(email)){ 
        alert("Hibás e-mail!"); 
        return;
    }
    if (jelszo.trim() == "") { 
        alert("A jelszó megadása kötelező!"); 
        return; 
    }

    const mentett = localStorage.getItem(email);
    if (!mentett) { 
        alert("Nincs ilyen felhasználó!"); 
        return; 
    }
    if (mentett != jelszo) { 
        alert("Helytelen jelszó!"); 
        return; 
    }

    localStorage.setItem("felhsznalo", email);
    alert("Sikeres bejelentkezés, üdv " + email + "!");
}

function regist() {
    const email = document.getElementById("email").value.trim();
    const pw1 = document.getElementById("pwd1").value;
    const pw2 = document.getElementById("pwd2").value;

    if (!validEmail(email)) { 
        alert("Hibás e-mail!");
         return; 
        }
    if (pw1 == "" || pw2 == "") { 
        alert("A jelszómezők nem lehetnek üresek!");
         return; 
        }
    if (pw1 != pw2) {
         alert("A két jelszó eltér!");
          return; 
        }
    if (localStorage.getItem(email)) { 
        alert("Az email foglalt!"); 
        return; 
    }

    localStorage.setItem(email, pw1);
    alert("Sikeres regisztráció, " + email + "!");
    window.location.href = "bejelentkezes.html";
}
