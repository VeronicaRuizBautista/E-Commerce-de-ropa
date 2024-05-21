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
function agregarProducto(clase) {
    mostrarDiv(clase); // Llamar a la función mostrarDiv
    incrementar('contador'); // Llamar a la función incrementar
}



function incrementar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
    localStorage.setItem('contador', contador);
}

function restar() {
    let contador = parseInt(document.getElementById('contador').innerText);
    contador--;
    document.getElementById('contador').innerText = contador;
    localStorage.setItem('contador', contador);
}

window.restar =restar
function contadorCero() {
    document.getElementById('contador').innerText = 0;
    localStorage.setItem('contador', 0);
}
function modificarContador(num) {
    let cont = parseInt(document.getElementById('contador').innerText);
    contador = cont - num;
    document.getElementById('contador').innerText = contador;
    localStorage.setItem('contador', contador);
}
window.modificarContador = modificarContador

window.onload = function() {
    let contadorGuardado = localStorage.getItem('contador');
    if (contadorGuardado !== null) {
        document.getElementById('contador').innerText = contadorGuardado;
    }
};

//window.itemsAgregados = []
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