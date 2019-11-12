function dato() {
    var altura = document.forms["form"]["altura"].value;
    var signo = document.forms["form"]["signo"].value;
    var aux1 = altura;
    aux1 = altura;
    var aux3 = 2;
    var espacio = " ,";
    for (var i = 0; i < altura; i++) {
        for (var ii = 1; ii < aux1; ii++) {
            document.write(espacio);
        }
        aux1--;
        var aux2 = 1;
        while (aux2 < aux3) {
            document.write(signo);
            aux2++;
        }
        aux3 += 2;
        document.write("<br>");
    }
}
