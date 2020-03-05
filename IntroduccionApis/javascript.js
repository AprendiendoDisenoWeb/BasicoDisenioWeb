
var boton = document.getElementById("boton");
var contenido = document.getElementById("contenido");
var imagen = document.getElementById("imagen");

boton.addEventListener('mouseover', traer);

console.log(imagen);

function traer()
{
    fetch('https://randomuser.me/api/')
    .then(data => data.json()) //Vamos a coger lo que nos devuelve una petición a esa url indicando el tipo de respuesta (.json) no tiene por qué llamarse data
    .then(data => 
    {
        console.log(data.results['0'].email); //Si desde firefox developer inspeccionamos lo que se imprime al hacer consoloe.log(data) veremos que nos devuelve varios campos. Podemos acceder a ellos poniendo . y el nombre dle campo, como en el ejemplo actual
        contenido.innerHTML = `<img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
        <p>Email: ${data.results['0'].email} </p>` //Al usar estas comillas `` podemos poner dentro código html. Lo que estamos haciendo es incluir estas etiquetas dinámicas (tienen es ${} lo que permite que tomen valores en base a los datos que rescatamos) para poner dentro de contenido lo que rescatamos al hacer la llamada a la página. Estamos cogiendo la imagen y el email del usuario
    })
}