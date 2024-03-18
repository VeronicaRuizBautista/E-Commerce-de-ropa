function botonMenu() {
    var menus = document.querySelectorAll('nav[id="menu"]');
    menus.forEach(function(menu) {
        menu.classList.toggle("visible");
    });
}


function incrementar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
}