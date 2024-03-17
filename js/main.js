function botonMenu() {
    var menus = document.querySelectorAll('nav[id="menu"]');
    menus.forEach(function(menu) {
        menu.classList.toggle("visible");
    });
}