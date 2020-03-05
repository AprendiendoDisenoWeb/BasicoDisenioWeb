alert('Hola mundo'); //Esto es como un printf en javascript. Se mostrará a modo de pantalla emergente cuando abramos el programa en el navegador

//Hay parte del código que está escrito en el archivo html en las etiquetas <script></script>

//Sentencias condicionales
var numero = 10; //Podemos tener una variable con el mismo nombre aquí y en el código javascript de html
var nombre = 'Alexito';
var array = [1, 3, 10, 'rexto'];

if(numero % 2 == 0 && nombre == 'Alexito') //Si el número es par y el nombre es Alexito
{
    console.log('El número es par y su nombre es: ' + nombre); //Imprimimos en la consola
}
else
{
    console.log('El número es impar');
}

//Vamos a ver cómo podemos imprimir el array
console.log(array);

//Ahora vamos a llamar a una posición concreta (empiezan en la posición 0, como siempre)
console.log("El valor del array en la tercera posición es: " + array[2]);

//Bucles
for(var i = 0; i < 4; i++)
{
    console.log(array[i]);
}

console.log("Segunda forma de imprimir un array:");

var counter = 0;

while(counter < 4)
{
    console.log(array[counter]);
    
    counter++;
}

//Y por último el último (valga la redundancia) bucle que nunca se usa
console.log("El do while es útil pocas veces, pero cuando lo es, hay que tenerlo en cuenta")
var counter2 = 0;

do
{
    console.log(array[counter2]);
    counter2++;
}
while(counter2 < 1);

//Vemos ahora la última sentencia condicional

var hora = 10;

switch(hora)
{
    case 10:
        console.log("Son las 10 de la mañana");
        break;
    
    case 13:
        console.log("Es la una de la tarde");
        break;
    
    default:
        console.log("No sabemos decirte qué hora es, solo nos hemos aprendido 2");
}

//Funciones
var num1 = 10;
var num2 = 15;

function suma()
{
    var res = num1 + num2;
    console.log("El resultado de la suma es: " + res);
}

suma(); //Aquí llamamos a la funcion

function sumaConParametros(numero1, numero2)
{
    var res2 = numero1 + numero2;
    console.log("El resultado de la suma CON PARAMETROS es: " + res2);
}

sumaConParametros(14, 102);

//He dejado en la carpeta "Pantallazos importantes" una demostración de cómo puedo llamar
//desde la consola a una función creada en este archivo javascript, pasándole parámetros y todo



//Ahora vamos a ver cómo referenciar los objetos dentro del documento html en base a su id
var divLogo = document.getElementById("divDelLogo");

console.log(divLogo);