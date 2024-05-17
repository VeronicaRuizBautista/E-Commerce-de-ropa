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
                            <p>${val.value}</p>
                            <div class="btn">
                                <button onclick="incrementar('contador')">Agregar</button> 
                            </div>
                        </div>
                    </div>
                `
                }
            })
        this.shadowRoot.innerHTML = content;
        }
        
}
customElements.define("my-abrigos" , abrigos)