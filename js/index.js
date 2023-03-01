let jsEscondido = false;
let htmlEscondido = false;
let cssEscondido = false;

document.getElementById("accion-html").onclick = function() {
    console.log("Probando evento")
    if(!htmlEscondido) {
        htmlEscondido = true;
        document.getElementById("accion-html").innerHTML = "Principiante"
    } else {
        htmlEscondido = false;
        document.getElementById("accion-html").innerHTML = "<i class=\"fa-brands fa-html5\"></i>HTML"

    }
    
}

document.getElementById("accion-css").onclick = function() {
    console.log("Probando evento")
    if(!cssEscondido) {
        cssEscondido = true;
        document.getElementById("accion-css").innerHTML = "Principiante"
    } else {
        cssEscondido = false;
        document.getElementById("accion-css").innerHTML = "<i class=\"fa-brands fa-css3-alt\"></i>CSS"

    }
    
}

document.getElementById("accion-js").onclick = function() {
    console.log("Probando evento")
    if(!jsEscondido) {
        jsEscondido = true;
        document.getElementById("accion-js").innerHTML = "Principiante"
    } else {
        jsEscondido = false;
        document.getElementById("accion-js").innerHTML = "<i class=\"fa-brands fa-js\"></i>JavaScript"

    }
}

