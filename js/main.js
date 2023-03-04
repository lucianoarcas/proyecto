let carrito = []
let subtotal = 0
let precio = 0
let productoSelecionado = ""
let cantidad = 0
let productoId = 0
let sumaSubtotal = 0
let carritoEnJson = ""


const pintarProductos = (productos) => {

  const contenedor = document.getElementById("contenedor");

  productos.forEach(producto => {
    const article = document.createElement("article")
    article.classList.add("art")
    article.innerHTML += `<p class="descripcion"> ${producto.nombre}</p>
                          <p class="formato"> ${producto.formato}</p>
                          <p class="precio"> $${producto.precio}</p>
                          <input type="number" placeholder="0" id=${producto.id} class="cant">
                         `

    contenedor.appendChild(article)   

  });

};


const total = document.getElementById("total")

contenedor.addEventListener("change", (e) => {
  productoId = e.target.id
  cantidad = e.target.value
  productoSelecionado = productos.find(producto => producto.id == productoId)
  precio = productoSelecionado.precio
  productoSelecionado.cantidad = cantidad
  subtotal = precio * cantidad

  let subtotalElement = document.getElementById(`subtotal-${productoId}`)
    if (!subtotalElement) {
      subtotalElement = document.createElement("p")
      subtotalElement.setAttribute("id", `subtotal-${productoId}`)
      subtotalElement.classList.add("subtotal")

    }

    subtotalElement.innerHTML = `$${subtotal}`;

  
  carrito = productos.filter(producto => producto.cantidad != undefined && producto.cantidad > 0)
  sumaSubtotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
  total.innerHTML = `$${sumaSubtotal}`;
  


  carritoEnJson = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoEnJson);
  
  localStorage.setItem("total", sumaSubtotal);
  

})


document.addEventListener('DOMContentLoaded', () => {
  pintarProductos(productos);
  total.innerHTML = ` $${sumaSubtotal}`;

});



