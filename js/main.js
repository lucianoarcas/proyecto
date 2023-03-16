let carrito = []
let subtotal = 0
let precio = 0
let productoSelecionado = ""
let cantidad = 0
let productoId = 0
let sumaSubtotal = 0
let carritoEnJson = ""
let data = []


// selecciona el contenedor que tiene los productos y agrego un listener para detectar cambios en las cantidades pedidas de cada producto.

const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("change", (e) => {
  productoId = e.target.id
  cantidad = e.target.value
  productoSelecionado = productos.find(producto => producto.id == productoId)
  precio = productoSelecionado.precio
  productoSelecionado.cantidad = cantidad
  subtotal = precio * cantidad


  // aqui calculo el subtotal de cada producto
  let subtotalElement = document.getElementById(`subtotal-${productoId}`)
    if (!subtotalElement) {
      subtotalElement = document.createElement("p")
      subtotalElement.setAttribute("id", `subtotal-${productoId}`)
      subtotalElement.classList.add("subtotal")

    }

    subtotalElement.innerHTML = `$${subtotal}`;

  

// aqui se filtran los productos agregados al carrito y se suman los subtotales
  carrito = productos.filter(producto => producto.cantidad != undefined && producto.cantidad > 0)
  sumaSubtotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)

  // el elemento con ID total es un <p> que muestra el total del pedido
  const total = document.getElementById("total")
  total.innerHTML = `$${sumaSubtotal}`;
  

// guardo los datos del carrito en storage
  carritoEnJson = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoEnJson);
  localStorage.setItem("total", sumaSubtotal);
  

})

// inicializa el total del pedido en $0
document.addEventListener('DOMContentLoaded', () => {

  total.innerHTML = ` $${sumaSubtotal}`;

});



// funcion async con fetch para pintar productos desde archivo json.

async function storage(){
  const response =  await fetch("../js/data.json")
  data = await response.json()

  data.forEach(producto => {
    const article = document.createElement("article")
    article.classList.add("art")
    article.innerHTML += `<p class="descripcion"> ${producto.nombre}</p>
                          <p class="formato"> ${producto.formato}</p>
                          <p class="precio"> $${producto.precio}</p>
                          <input type="number" placeholder="0" id=${producto.id} class="cant">
                         `

    contenedor.appendChild(article)   

  });

 }

 storage()
