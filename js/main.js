document.addEventListener("DOMContentLoaded", function(){
    if (!localStorage.getItem('esPrimeraVez')){
        localStorage.clear();
        localStorage.setItem('esPrimeraVez', 'true')
    }
})


function botonMenu() {
    var menus = document.querySelectorAll('nav[id="menu"]');
    menus.forEach(function(menu) {
        menu.classList.toggle("visible");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("myBoton");

    if (boton) {
        boton.addEventListener("click", function() {
            boton.classList.add("home");
        });
    } else {
        console.error("Elemento con ID 'miBoton' no encontrado.");
    }
});
function agregarProducto(clase) {
    mostrarDiv(clase); // Llamar a la función mostrarDiv
    incrementar('contador'); // Llamar a la función incrementar
}
/*var listaproducto = [];

function mostrarDiv(clase) {
    // URL del otro HTML
    var urlOtroHTML = 'views/carritos.html';

    // Realizar una solicitud Fetch para cargar el otro HTML
    fetch(urlOtroHTML)
        .then(response => response.text())
        .then(html => {
            // Crear un elemento div temporal y establecer su contenido como el HTML cargado
            var temporalDiv = document.createElement('div');
            temporalDiv.innerHTML = html;

            // Buscar el div con la clase específica dentro del HTML cargado
            var divIgual = temporalDiv.querySelector('.' + clase);

            // Si se encontró el div, agregar la clase "visible"
            if (divIgual) {
                divIgual.classList.add('visible');
                var contenido = divIgual.innerHTML;
                listaproducto.push(contenido)
                console.log(listaproducto)
                localStorage.setItem('listaproducto', JSON.stringify(listaproducto))
                console.log(localStorage)
            }
        })
        .catch(error => {
            console.error('Error al cargar el otro HTML:', error);
        });
}*/


function incrementar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
}
/*function mostrarListaGuardada() {
    var listacontenido = JSON.parse(localStorage.getItem('listaproducto'));
    console.log(typeof(listacontenido))
    console.log(listacontenido);
    var div =document.getElementById("miDiv");
    console.log(div)
    listacontenido.forEach(function(elemento) {
        var nuevoelemento = document.createElement('p');
        nuevoelemento.textContent = elemento;
        div.appendChild(nuevoelemento);
    });
}


document.addEventListener("DOMContentLoaded" , mostrarListaGuardada())*/


function agregar(img, description, value, id) {
    window.itemsAgregados = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
    const item= {img, description, value, id}
    itemsAgregados.push(item)
    console.log("item agregado", itemsAgregados)
    incrementar('contador');
    localStorage.setItem('itemsAgregados', JSON.stringify(itemsAgregados));
}