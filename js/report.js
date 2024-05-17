import { todos } from "./components/ropa.js"
import { abrigos } from "./components/ropa.js"
import { camisetas } from "./components/ropa.js"
import { pantalones } from "./components/ropa.js"

let opcion = document.querySelectorAll("nav.categorias a")
let report_details = document.querySelector(".report_details")
opcion.forEach (val =>{
    val.addEventListener("click", (e)=>{
        e.preventDefault()
        opcion.forEach(link => link.classList.remove('report_active'))
        e.target.classList.add("report_active")

        if (e.target.innerText == "Todos los productos"){
            report_details.innerHTML= `
            <toda-ropa class="ropita"></toda-ropa>
            `
        }
        if (e.target.innerText == "Abrigos"){
            report_details.innerHTML= `
            <my-abrigos class="ropita"></my-abrigos>
            `
        }
        if (e.target.innerText == "Camisetas"){
            report_details.innerHTML= `
            <my-camisetas class="ropita"></my-camisetas>
            `
        }
        if (e.target.innerText == "Pantalones"){
            report_details.innerHTML= `
            <my-pantalones class="ropita"></my-pantalones>
            `
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