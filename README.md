# TypeScript (Aprende programación en un día)

## Miembros del grupo

Escribe aquí los miembros del grupo. El primero es el representante o encargado.

* [Ismael Pacheco Torrecilla](https://github.com/ismaelpacheco13)
* [Diego Martínez Alaminos](https://github.com/diegomartinezalaminos)
* [Juan Pavón López](https://github.com/JuanPavon)

## Lenguaje de programación

Escribe el lenguaje de programación elegido por el grupo.

* [TypeScript](https://www.typescriptlang.org/)

## Información sobre el lenguaje

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png" alt="IMAGEN: TypeScript">

TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft, fue publicado en octubre de 2012 (versión 0.8) después de dos años de desarrollo por parte de Microsoft.  
Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases y puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).  
Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.

Su principal ventaja es la de contar con todas las características presentes en Javascript además de las añadidas por el propio lenguaje, creando un código más limpio y entendible.

- Información extraída de la página de [la página de TypeScript](https://es.wikipedia.org/wiki/TypeScript) en [Wikipedia.](https://es.wikipedia.org)

## Herramientas de desarrollo

Para programar en este lenguaje, hemos usado la herramienta propia de Microsoft: "Visual Studio Code".

<img src="https://code.visualstudio.com/assets/docs/languages/typescript/Languages_typescript.png" alt="IMAGEN: Visual Studio Code + JavaScript">

## Poniendo en práctica el lenguaje

Pon en práctica el lenguaje de programación realizando los siguientes ejercicios. Para cada uno de los ejercicios, pega el código fuente de la solución y una captura de pantalla.


> **Para compilar el archivo .ts deberemos de escribir en la consola el siguiente comando: *tsc "nombrearchivo.ts"* y para ejecutar el archivo .js (que se ha creado con el comando anterior) deberemos de escribir este comando: *node "nombrearchivo.js* (ambos comandos sin las comillas en los nombres de los archivos).**

### 1. ¡Hola mundo!

> Realiza un programa que muestre por pantalla la frase **¡Hola mundo!**.

El conocido programa de Hola Mundo es sumamente sencillo de realizar en TypeScript, ya que podremos realizarlo en tan solo una línea de código:

```typescript
console.log("¡Hola Mundo!");
```

Y este es el resultado:
<img src="https://lh3.googleusercontent.com/hK9vhugNCMsmjZYB6-Wdqiju60ZoPgzxlfcWxanmKe692z3ivjTmNpomdOhyWaHNj6Ic2MFYedXaViT1wuQP_L4O-dEAaAikfhWInt-NghD09DqHpbRIFV8wU-P0xmvcK27A7rrsDmHu_zHlfaaEpz4ow1PXdxgP4zFMW6ZLDYOS4oxCzFN99Zi-SBM6NvZwZmwXTuw-A5pUAZyo-D1Asytj5bJPlQrpRYJjHr_D2gfH9gM-E4llmrjNMNwviMnMMDsm8bXfWyDZludh_Nk16WXHHZl5GXHMLQCmHtx8lYC7i1Rgk9EDDac4UojWrszHKicdafblsBaI9yLlCYcoGBSYC_yLYIiI0Om2es_FMm25aFUhqTntZMcggND5PjCs4BewsL66UhWwkJqNIkLK37A5UvG-UhqeyPb1-o5DWf6odJVkCIMPtw_DzZ3OkmTLxHt4yJtay_PFInqS_O3kNkGpioJJK2GzuCs7-Z6gsfsfCKzJtGf_mKSsCGIn8V9BdAes9AnEBh3AWKo0CPWi2Z3pJesOf-cGwxVwj2_F4g-y3qp_cxawLpPEKTAYWyBezwP0TJkj_SeJ8cNmR4eOUBsIEFBglbh09Ikhw1efhQ-9flr1nHMvq70ToeRLRKlagle5eOJ9Y77KTWjyw8u9WYRTSpISdF0--KC-S_IgCO21BGCbyRmOxA=w1101-h46-no" alt="IMAGEN: Hola Mundo!">

### 2. Pirámide

> Dada una altura introducida por el usuario, realiza un programa que pinte una pirámide a base de asteriscos con la altura indicada.

Para este ejercicio hemos incorporado al código de TypeScript [un formulario en HTML](https://ismaelpacheco13.github.io/aprende-un-lenguaje-en-un-dia/TypeScript/Ejercicio02%20(Pir%C3%A1mide)/index.html) con el que introducir los datos.  
El código en TypeScript del programa sería el siguiente:

```typescript
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
```

### 3. Arrays y números aleatorios

> Realiza un programa que rellene un array (o una estructura similar) con 20 números enteros aleatorios entre 1 y 100 y que seguidamente los muestre por pantalla. A continuación, se deben pasar los números primos a las primeras posiciones del array y los no primos a las posiciones restantes. Muestra finalmente el array resultado.

Este ejercicio es el que más líneas de código nos ha ocupado debido a la necesidad de incorporar varios arrays.  
El código es el siguiente:

```typescript
var array:number[] = new Array(20);
var primos:number[] = new Array();
var noprimos:number[] = new Array();
var contador:number = 0;
var auxcontador:number = 0;
var cadena:String = "";

console.log("");
console.log("El Array aleatorio es: ");
console.log("");

for(var y = 0;y < 20;y++) {
  var random = Math.floor(Math.random() * 101 + 1);
  array[y] = random;
  cadena = cadena + String(random) + " , "; 
}

console.log(cadena);
cadena = "";

for(var i = 0;i < 20;i++){
  for(var x = 0;x <= array[i];x++){
    if ((array[i] % x) == 0){
      contador++;
    }
  }
  if (contador == 2){
    primos[auxcontador] = array[i];
    auxcontador++;
  }else{
    noprimos[auxcontador] = array[i];
    auxcontador++;
  }
  contador = 0;   
}

console.log("");
console.log("El Array aleatorio con números primos al principio y no primos al final: ")
console.log("");

var cont:number = 0;
primos.forEach(element => {
  cadena = cadena + String(element) + " , ";
  cont++;
});

noprimos.forEach(element => {
  cadena = cadena + String(element) + " , ";
  cont++;
});

console.log(cadena);
```

El resultado sería el siguiente:
<img src="https://lh3.googleusercontent.com/IqMIdo7PR1Qvi2kijteuZPOiH9hmmdXPJ6TmO6XOmuyD7_-LRYMCnAg_pQQi8EKhfyMLwSLkYcAw-rYlFl1xtwimvd6L05QoJCg--dgW2iGE1j2u_6xCwOHjMLoWCuTsEf57YVc_fvMiC0KH6MBGnT46ARlRtvN4vt-8WKw_8AHpbRW_5yA-ignwNyW9UYOMWO4W90UsEiEE1vhoWX34oiIZH2_IdXRLknZxWmBKYZrec55JEJxPZRmHpVevCFDIfmOwuUb9hdhCI6jTulAFrBuGBRVaTSvoShfIDPEtrWkIeAYy9i__kVDhnudXkxE0HeNSGCg3UjaRFdGi5lrRwLjpfrKn3scGOpxwIzrJZPZ73yZ8AuLzHtOGLvr1_r7bBvcPArR727wCCdjL9J_byAcy-rik9Fxstu3ST9BXwagISqai6Ybv2L_iWcFDOshM20n5w_EaldmT5SxxJBo76W53LSEGpQwSz7_hBu4LJjmF9r3WWmn2JfCuvuYi3uf2FdIdA6aweQwIPv2WtFFy5B0YOW-pMDD_4qXMNjRAO0Zle9gfyr7V9OlzIOfg0htDiWHbviZuEi5vxJbvBtIpd00Pzkmc0_n2R6hOiqiKp1EHv17p2CfiCL3wGzrT23XCkOsaobGkSJ1BRfVgg6Z9SrXwlwV5oy4ewz17xsjPFJxS_mlmXArQzQ=w1202-h162-no" alt="IMAGEN: Array Números Aleatorios (Ordenados)">


> :star: Si te ha gustado este ejercicio, dale una estrellita al [repositorio original](https://github.com/LuisJoseSanchez/aprende-un-lenguaje-en-un-dia).

