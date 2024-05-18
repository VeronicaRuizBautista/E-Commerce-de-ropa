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



function incrementar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
}



function agregar(img, description, value, id) {
    window.itemsAgregados = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
    const existente = itemsAgregados.find(item => item.description == description);
    let cantidad=1
    if (existente) {
        existente.cantidad += 1;
    } else {
        const item= {img, description, value, id, cantidad}
        itemsAgregados.push(item)
        console.log("item agregado", itemsAgregados)
        localStorage.setItem('itemsAgregados', JSON.stringify(itemsAgregados));
    }
    incrementar('contador');
    localStorage.setItem('itemsAgregados', JSON.stringify(itemsAgregados))
}