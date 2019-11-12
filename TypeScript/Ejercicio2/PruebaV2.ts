function dato(){
    let altura = document.forms["form"]["altura"].value;
    let signo = document.forms["form"]["signo"].value;
    
    let aux1: number = altura;
    aux1 = altura;
    let aux3: number = 2;
    let espacio: string = "   ";

    for (let i = 0; i < altura; i++) {
        for(let ii = 1; ii < aux1; ii++) {
            document.write(espacio);
        }
        aux1--;

        let aux2: number = 1;

        while (aux2 < aux3) {
            document.write(signo);
            aux2++;
        }
        aux3 += 2;
        document.write("<br>");
    }
}
