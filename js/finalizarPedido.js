
let carrito2 = []



async function pintarCarro (){

    carrito2 = JSON.parse(localStorage.getItem("carrito"))
    console.log(carrito2)

    const controlCarrito1 = document.createElement("div")
    controlCarrito1.classList.add("controlCarrito1")
    controlCarrito.appendChild(controlCarrito1)
    
    carrito2.forEach(producto => {
    
        const article = document.createElement("article")
        
        article.innerHTML += `<p> ${producto.cantidad}</p>
                              <p> ${producto.nombre}</p>
                              <p> ${producto.formato}</p>`

        controlCarrito1.appendChild(article)
        
    });


}

pintarCarro()

let control = document.getElementById("controlCarrito")

const pintarTotal = () => {

    let total = localStorage.getItem("total")
    let pedidoTotal = document.createElement("p")
    pedidoTotal.classList.add("p-total")
    pedidoTotal.innerHTML += `Total : $${total}`



    control.appendChild(pedidoTotal)
    console.log(pedidoTotal)

}

pintarTotal()