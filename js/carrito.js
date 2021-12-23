let prodSeleccionados = document.getElementById("prodSeleccionados")
let verCarrito = document.getElementById("verCarrito")
let eliminarCarrito = document.getElementById("eliminarCarrito")
let carrito = []

if('carrito' in localStorage && JSON.parse(localStorage.getItem('carrito')).length > 0){
    let carritoActual = JSON.parse(localStorage.getItem('carrito'))
}

document.getElementById("eliminarCarrito").addEventListener('click', () =>{
    carrito.splice(0, carrito.length)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    prodSeleccionados.innerHTML = ""

    Toastify({
        text: "Carrito eliminado correctamente",
        className: "info",
        style: {
        background: "#d73b3e",
        }
      }).showToast();
})


verCarrito.addEventListener('click', () =>{
    let verProductos = JSON.parse((localStorage.getItem('carrito')))
    prodSeleccionados.innerHTML += `${(verProductos)}`
})


/*prodSeleccionados.innerHTML += `<div class="row row-cols-3 row-cols-md-2 g-4">
                                    <div class="row">
                                        <div class="card" id="prod${agregarProducto.id}">
                                            <img src="${agregarProducto.img}" class="card-img-top" alt="${agregarProducto.alt}">
                                            <div class="card-body">
                                                <h5 class="card-title">${agregarProducto.nombre}</h5>
                                                <p class="card-text">Precio: $${agregarProducto.precio}</p>
                                                <p class="extra_text">${agregarProducto.extra}</p>
                                                <button id="boton${agregarProducto.id}" class="btn btn-primary">Añadir al carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>`*/