# TypeScript (Aprende programación en un día)

## Índice

* [Miembros del grupo](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#miembros-del-grupo)
* [Lenguaje de Programación](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#lenguaje-de-programaci%C3%B3n)
* [Información sobre el lenguaje](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#informaci%C3%B3n-sobre-el-lenguaje)
* [Herramientas de desarrollo](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#herramientas-de-desarrollo)
* [Poniendo en práctica el lenguaje](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#poniendo-en-pr%C3%A1ctica-el-lenguaje)
	* [¡Hola mundo!](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#1-hola-mundo)
	* [Pirámide](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#2-pir%C3%A1mide)
	* [Arrays y números aleatorios](https://github.com/ismaelpacheco13/aprende-un-lenguaje-en-un-dia#3-arrays-y-n%C3%BAmeros-aleatorios)

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
<img src="https://i.ibb.co/Z2rmD0Q/holamundo.png" alt="IMAGEN: Hola Mundo!">

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
<img src="https://i.ibb.co/Km3KpJw/array.png" alt="IMAGEN: Array Números Aleatorios (Ordenados)">


> :star: Si te ha gustado este ejercicio, dale una estrellita al [repositorio original](https://github.com/LuisJoseSanchez/aprende-un-lenguaje-en-un-dia).

