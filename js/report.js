import { todos } from "./components/ropa.js"
import { abrigos } from "./components/ropa.js"
import { camisetas } from "./components/ropa.js"
import { pantalones } from "./components/ropa.js"
import { ileraFinalCarrito } from "./components/ropa.js"


let opcion = document.querySelectorAll("nav.categorias a")
let report_details = document.querySelector(".report_details")
let ilera_final = document.querySelector(".ilera_final")
let todosLosProductos = document.querySelector(".tituloh1")
opcion.forEach (val =>{
    val.addEventListener("click", (e)=>{
        e.preventDefault()
        opcion.forEach(link => link.classList.remove('report_active'))
        e.target.classList.add("report_active")

        if (e.target.innerText == "Todos los productos"){
            report_details.innerHTML= `
            <toda-ropa class="ropita"></toda-ropa>
            `
            todosLosProductos.innerHTML = `
            <h1 class="tituloPrincipal">Todos los Productos</h1>
            ` 
            ilera_final.innerHTML = "";
        }
        if (e.target.innerText == "Abrigos"){
            report_details.innerHTML= `
            <my-abrigos class="ropita"></my-abrigos>
            `
            todosLosProductos.innerHTML = `
            <h1 class="tituloPrincipal">Abrigos</h1>`
            ilera_final.innerHTML = "";
        }
        if (e.target.innerText == "Camisetas"){
            report_details.innerHTML= `
            <my-camisetas class="ropita"></my-camisetas>
            `
            todosLosProductos.innerHTML = `
            <h1 class="tituloPrincipal">Camisetas</h1>`
            ilera_final.innerHTML = "";
        }
        if (e.target.innerText == "Pantalones"){
            report_details.innerHTML= `
            <my-pantalones class="ropita"></my-pantalones>
            `
            todosLosProductos.innerHTML = `
            <h1 class="tituloPrincipal">Pantalones</h1>`
            ilera_final.innerHTML = "";
        }
    })
})

const defaultOption = document.querySelector("nav.categorias a.report_active");
    if (defaultOption) {
        defaultOption.click();
    }
customElements.define("toda-ropa" , todos)
customElements.define("my-abrigos" , abrigos)
customElements.define("my-camisetas" , camisetas)
customElements.define("my-pantalones" , pantalones)
customElements.define("ilera-final" , ileraFinalCarrito)

let carrito = document.querySelector("nav.carritos a")
carrito.addEventListener("click", (e)=>{
    e.preventDefault()
    if (e.target.innerText == "Carritos"){
        report_details.innerHTML= `
        <my-carrito class="ropita_carrito"></my-carrito>
        `
        todosLosProductos.innerHTML = `
            <h1 class="tituloPrincipal">Carrito</h1>`
        ilera_final.innerHTML=`
        <ilera-final class="ilera_final"></ilera-final>
        `
    }
})
