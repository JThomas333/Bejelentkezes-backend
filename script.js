
function validEmail(cim) {
    const minta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return minta.test(cim);
}

async function belep() {
    const email = document.getElementById("email").value.trim();
    const jelszo = document.getElementById("pwd").value;

    if (!validEmail(email)) {
        alert("Hibás e-mail!");
        return;
    }
    if (jelszo.trim() == "") {
        alert("A jelszó megadása kötelező!");
        return;
    }

    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }
        else {
            alert("Sikeres bejelentkezés!");
        }

    } catch (e) {
        alert(e.message);
    }
}

async function regist() {
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
     try {
        const res = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: pw1 })
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }
        else{
            alert("Sikeres regisztráció!");
        }

        window.location.href = "bejelentkezes.html";
    } catch (err) {
        alert(err.message);
    }
}
