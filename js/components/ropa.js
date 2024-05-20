export class todos extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.ropa_toda();
    }
    async ropa_toda(){
        const bdata = await fetch("https://6608363ca2a5dd477b14291c.mockapi.io/allProduct")
        const data = await bdata.json();
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/ropa.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;

            data.forEach(val =>{
                content += `
                <div class="items">
                    <img src="${val.img}" alt="ropa">
                    <div class="container">
                        <p>${val.description}</p>
                        <p>$ ${val.value}</p>
                        <div class="btn">
                            <button onclick="agregar('${val.img}', '${val.description}', ${val.value}, '${val.id}')">Agregar</button> 
                        </div>
                    </div>
                </div>
            `
            })
        this.shadowRoot.innerHTML = content;
        }
        
}


export class abrigos extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.ropa_abrigos();
    }
    async ropa_abrigos(){
        const bdata = await fetch("https://6608363ca2a5dd477b14291c.mockapi.io/allProduct")
        console.log(bdata)
        const data = await bdata.json();
        console.log(data)
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/ropa.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;

            data.forEach(val =>{
                if (val.id == "abrigo"){
                    content += `
                    <div class="items">
                        <img src="${val.img}" alt="ropa">
                        <div class="container">
                            <p>${val.description}</p>
                            <p>$ ${val.value}</p>
                            <div class="btn">
                                <button onclick="agregar('${val.img}', '${val.description}', ${val.value}, '${val.id}')">Agregar</button> 
                            </div>
                        </div>
                    </div>
                `
                }
            })
        this.shadowRoot.innerHTML = content;
        }
        
}



export class camisetas extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.ropa_camisetas();
    }
    async ropa_camisetas(){
        const bdata = await fetch("https://6608363ca2a5dd477b14291c.mockapi.io/allProduct")
        console.log(bdata)
        const data = await bdata.json();
        console.log(data)
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/ropa.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;

            data.forEach(val =>{
                if (val.id == "camiseta"){
                    content += `
                    <div class="items">
                        <img src="${val.img}" alt="ropa">
                        <div class="container">
                            <p>${val.description}</p>
                            <p>$ ${val.value}</p>
                            <div class="btn">
                                <button onclick="agregar('${val.img}', '${val.description}', ${val.value}, '${val.id}')">Agregar</button> 
                            </div>
                        </div>
                    </div>
                `
                }
            })
        this.shadowRoot.innerHTML = content;
        }
        
}



export class pantalones extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.ropa_pantalones();
    }
    async ropa_pantalones(){
        const bdata = await fetch("https://6608363ca2a5dd477b14291c.mockapi.io/allProduct")
        const data = await bdata.json();
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/ropa.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;

            data.forEach(val =>{
                if (val.id == "pantalon"){
                    content += `
                    <div class="items">
                        <img src="${val.img}" alt="ropa">
                        <div class="container">
                            <p>${val.description}</p>
                            <p>$ ${val.value}</p>
                            <div class="btn">
                                <button onclick="agregar('${val.img}', '${val.description}', ${val.value}, '${val.id}')">Agregar</button> 
                            </div>
                        </div>
                    </div>
                `
                }
            })
        this.shadowRoot.innerHTML = content;
        }
        
}


export class carrito extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        this.total = 0;
    }
    connectedCallback(){
        this.ropa_carrito();
    }
    async ropa_carrito(){
        //let data = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
        //console.log("hi",data)
        const data = window.itemsAgregados
        this.renderData(data);

    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/ropa.css">
            <script src="./js/main.js"></script>`;
            
            let content = `${style}`;
            data.forEach(val =>{
                content += `
                <head><link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></head>
                <div class="carritoItem">
                    <div class="img">
                        <img src="${val.img}" alt="ropa">
                    </div>
                    <div class="descripcion">
                        <h2>${val.id}</h2>
                        <p>${val.description}</p>
                    </div>                    
                    <div class="cantidad">
                        <h3>Cantidad</h3>
                        <div class="num">${val.cantidad}</div>
                    </div>
                    <div class="precio">
                        <h3>Precio c/u</h3>
                        <p>$ ${val.value}</p>
                    </div>
                    <div class="subtotal">
                        <h3>subtotal</h3>
                        <p>$ ${val.value * val.cantidad}</p>
                    </div>
                    <div class="btn">
                        <a class="eliminar" >
                            <i class='bx bx-trash' style='color:#e07621'  ></i>
                        </a>
                    </div>
            </div>
            `
            this.total += val.value * val.cantidad;
            })
        this.shadowRoot.innerHTML = content;
        this.attachEventListeners();
        }


    //ELiminar elementos
    attachEventListeners() {
        const eliminar = this.shadowRoot.querySelectorAll('.eliminar');
        eliminar.forEach(button => {
            button.addEventListener('click', () => {
                const carritoItem = button.closest('.carritoItem');
                const itemId = carritoItem.querySelector('.descripcion h2').textContent;
                carritoItem.remove();
                const index = window.itemsAgregados.findIndex(val => val.description == itemId);
                window.itemsAgregados.splice(index, 1);
                const cantidadElement = carritoItem.querySelector('.cantidad .num');
                console.log(cantidadElement)
                const cantidad = parseInt(cantidadElement.textContent);
                console.log(cantidad)
                if (cantidad > 1) {
                    window.modificarContador(cantidad);
                }else {
                    window.restar()
                }
                //this.eliminarItemDelLocalStorage(itemId);
            });
        });
    }

    // eliminarItemDelLocalStorage(itemId) {
    //     let data = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
    //     data = data.filter(item => item.id !== itemId);
    //     localStorage.setItem('itemsAgregados', JSON.stringify(data));
    // }
    getTotal() {
        return this.total;
    }
}
customElements.define("my-carrito" , carrito)



//cantidad de items en carrito
export class cantidadCarrito extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.ropa_carrito();
    }
    async ropa_carrito(){
        const data = window.itemsAgregados
        //let data = JSON.parse(localStorage.getItem('itemsAgregados')) || []; 
        this.renderData(data);

    }
        renderData(data){
            let cantidad = data.length;
            let content = `<p>${cantidad}</p>`
            this.shadowRoot.innerHTML = content;
        }
}
customElements.define("my-cantidad" , cantidadCarrito)

export class ileraFinalCarrito extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        this.total =0;
    }
    connectedCallback(){
        this.ropa_carrito();
    }
    async ropa_carrito(){
        //let data = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
        const data = window.itemsAgregados
        this.renderData(data);

    }
    
    renderData(data){
        const style = `
        <link rel="stylesheet" href="../css/ropa.css">
        <script src="./js/main.js"></script>
        `;
        
        let content = `${style}`;
        data.forEach(val =>{
            this.total += val.value * val.cantidad;
        })
        content += `
        <div class="btn01">
            <a class="vaciarCarrito" onclick="contadorCero()">Vaciar Carrito</a>
        </div>
        <div class="containerbtn">
            <div class="texto">
                <p>Total</p>
                <p>$ ${this.total.toFixed(2)}</p>
            </div>
            <div class="btn02">
                <a class="comprar">Comprar Ahora</a>
            </div>
        </div>
        `
        this.shadowRoot.innerHTML = content;

        this.shadowRoot.querySelector('.vaciarCarrito').addEventListener('click', (e) => {
            e.preventDefault();
            window.itemsAgregados =[]
            this.total = 0;
            let report_details = document.querySelector(".report_details")
            report_details.innerHTML= "El carrito esta vacio :(";
        });

        this.shadowRoot.querySelector('.comprar').addEventListener('click', (e) => {
            e.preventDefault();
            window.itemsAgregados =[];
            this.total = 0;
            let report_details = document.querySelector(".report_details")
            report_details.innerHTML= "Gracias por tu compra :)";
            contadorCero()
        });
    }
}