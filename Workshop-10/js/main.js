let arrayPersonas = [];

class Persona {
    constructor(nom, email, tel) {
        this._nom = nom;
        this._email = email;
        this._tel = tel;
    }
}

function agregar() {
    var nom = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telefono").value;
    if (nom == '' || email == '' || tel == '') {
        alert("Debe llenar todas las casilla");
    } else {
        var per = new Persona(nom, email, tel);
        arrayPersonas.push(per);
        localStorage.setItem("Personas", JSON.stringify(arrayPersonas));
        // Agregar visual
        var fila = "<tr><td>" + nom + "</td><td>" + email + "</td><td>" + tel + "</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("celdas").appendChild(btn);
        limpiar();
    }
}

(() => {
    arrayPersonas = JSON.parse(localStorage.getItem("Personas"));
    if (arrayPersonas === null) {
        arrayPersonas = [];
    } else {
        arrayPersonas.forEach(element => {
            var fila = "<tr><td>" + element._nom + "</td><td>" + element._email + "</td><td>" + element._tel + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("celdas").appendChild(btn);
        });
    }
})();

function limpiar() {
    document.getElementById("nombre").value = '';
    document.getElementById("email").value = '';
    document.getElementById("telefono").value = '';
}

