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


