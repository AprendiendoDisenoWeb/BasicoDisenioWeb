alert('Esto debería funcionar');

var titulo = document.getElementById('Titulo');
var parrafos = document.getElementsByClassName('lead');
var botonPrueba = document.getElementById('boton');
var botonPrueba2 = document.getElementById('boton2');
var saludo = document.getElementById('prueba');
var suma = document.getElementById('suma');

console.log('Veamos si aparece esto');
console.log(titulo);
console.log(botonPrueba);

function botonPruebaFun()
{
    parrafos[0].style.color = 'olive';
    parrafos[1].style.color = 'black';
}

function botonPrueba2Fun()
{
    parrafos[1].style.color = 'olive';
    parrafos[0].style.color = 'black';
}

botonPrueba.addEventListener('mouseover', botonPruebaFun);
botonPrueba2.addEventListener('mouseover', botonPrueba2Fun);

/*
function saludar(nombre)
{
    return "Hola, " + nombre;
}

saludo.innerText = saludar("Alex");
*/

//Funciones Arrow. Vamos a hacer esa misma función que tenemos encima comentada con la expresión arrow

var saludar = nombre => "Hola, " + nombre;

//Se declara la función con un var. Después del = se ponen los argumentos y despues de => se pone el código que realiza la función

saludo.innerText = saludar("alexito");


var sumar = (num1, num2) => 
{
    var num3 = num1 + num2;

    return num3;
}
suma.innerText = suma.innerText + " " + sumar(10, 10);

//Objetos

var objeto = 
{
    nombre: 'Alex',
    edad: 20,
    inteligente: true,
    libroFav:  //Podemos tener objetos dentro de objetos
    {
        titulo: "Una breve historia de casi todo",
        paginas: 500
    }
}

console.log(objeto);
console.log(objeto['nombre']);
console.log(objeto.nombre); //Estas dos líneas son iguales
console.log(objeto.libroFav.titulo);

var arrayObjetos = [
    {
        nombre: 'objeto1',
        estado: true
    },
    {
        nombre: 'objeto2',
        estado: false
    }
]

console.log(arrayObjetos);
console.log(arrayObjetos[0].nombre);

console.log("Imprimimos el array de objetos mediante un for");

//Podemos imprimir el array así
for(let indice of arrayObjetos)
{
    console.log(indice.nombre);
}

