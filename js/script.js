//1. Construcción básica de objetos

class Productos{
    constructor(id, tipo, nombre, precio, extra, img, alt, cantidad){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.extra = extra;
        this.img = img;
        this.alt = alt;
        this.cantidad = cantidad;
    }
}

let arrayProductos = []


//2. Lógica carrito
const cardProd = document.getElementById("landingCards")
const eliminarCarrito = document.getElementById("eliminarCarrito")
const sumaPrecio = document.getElementById("sumaPrecio")
const filtro = document.getElementById('tipoProd')
let carrito = []

//Carrito inicial desde el localStorage
if("carrito" in localStorage && JSON.parse(localStorage.getItem('carrito')).length > 0){
    let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    for(const p of carritoGuardado){
        carrito.push(new Productos(p.id, p.tipo, p.nombre, p.precio, p.extra, p.img, p.alt, p.cantidad))
        actualizarPrecio()
    }
    
    for(const producto of carrito){
        mostrarCarrito(producto)
}
}

//3. Lógica de productos renderizados
$.getJSON('stock.json', function(data){
    data.forEach(producto => arrayProductos.push(producto))
    mostrarProductos(arrayProductos)
})
if(filtro){
        filtro.addEventListener('change', () =>{
        if(filtro.value == 'todos'){
            mostrarProductos(arrayProductos)
        }else{
            mostrarProductos(arrayProductos.filter(producto => producto.tipo == filtro.value))
        }
        })
    }

//Productos en página principal
function mostrarProductos(array){
    $('#landingCards').empty()
    for(producto of array){
    cardProd.innerHTML += `<div class="row row-cols-3 row-cols-md-2 g-4">
                                    <div class="row">
                                        <div class="card" id="card prod${producto.id}">
                                            <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
                                            <div class="card-body">
                                                <h5 class="card-title">${producto.nombre}</h5>
                                                <p class="card-text">Precio: $${producto.precio}</p>
                                                <p class="extra-text">${producto.extra}</p>
                                                <button id="boton${producto.id}" class="btn btn-primary btnAgregar">Añadir al carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>` 
    }
    
    array.forEach(producto =>{
        document.getElementById(`boton${producto.id}`).addEventListener('click', () =>{
            agregarAlCarrito(producto.id)            
        })  
    })
}
    
//Agregar prod al carrito
function agregarAlCarrito(idSeleccionado){    
    let producto = arrayProductos.find(prodElegido => prodElegido.id == idSeleccionado)
    let prodCarrito = carrito.find(prodElegido => prodElegido.id == idSeleccionado)
   if(prodCarrito){
        Toastify({
            text: "El producto ya se encuentra en el carrito",
            className: "info",
            style: {
                background: "#dda0dd",
            }
        }).showToast();
    }else{
        let indice = arrayProductos.findIndex(prodElegido => prodElegido.id == idSeleccionado)
        arrayProductos[indice].cantidad++;
         carrito.push(producto)
         mostrarCarrito(producto)
         localStorage.setItem('carrito', JSON.stringify(carrito))
         actualizarPrecio()
 
         Toastify({
             text: "Producto agregado al carrito",
             className: "info",
             style: {
                 background: "mediumpurple",
             }
         }).showToast();
    }
}

//Visualizar prod en modal + funcionamiento modal interno
function mostrarCarrito(producto){
        let divCarrito = document.getElementById('contenedor-carrito')
        let divProd = document.createElement('div')
        divProd.classList.add('prodEnCarrito')
        divProd.innerHTML += `<div class="productoEnCarrito">
                                    <p class="idCarrito">${producto.id}</p>
                                    <img class="imgCarrito" src="${producto.img}">
                                    <p class="nombreCarrito">${producto.nombre}</p>
                                    <input id="cantidad${producto.id}" class="cantidadCarrito" type="number" value="${producto.cantidad}" min="1">
                                    <p class="precioCarrito">Precio: $${producto.precio}</p>
                                    <i class="far fa-trash-alt boton-eliminar" id='eliminar${producto.id}'></i>
                                </div>`
    
        divCarrito.appendChild(divProd)

let cantidadProducto = document.getElementById(`cantidad${producto.id}`)
cantidadProducto.addEventListener('change', () => {

producto.cantidad = Number(cantidadProducto.value)
localStorage.setItem('carrito', JSON.stringify(carrito))
evitar0()
actualizarPrecio()

})

let btnEliminarProducto = document.getElementById(`eliminar${producto.id}`)
btnEliminarProducto.addEventListener('click', () => {
        producto.cantidad = 0;
        btnEliminarProducto.parentElement.remove()
        carrito = carrito.filter(borrarProd => borrarProd.id != producto.id)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    Toastify({
        text: "Producto Eliminado",
        className: "info",
        style: {
        background: "#d73b3e",
        }
    }).showToast();
    actualizarPrecio()
})

}

//Precio total
function actualizarPrecio(){
    sumaPrecio.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
}

//Evito que se compren menos de 1 producto
function evitar0(){
    $(".cantidadCarrito").on("change", (e) =>{
        var input = e.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
    })
    actualizarPrecio()
}


//Finalizar la compra
$('#comprarCarrito').click(()=>{
    $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(carrito),function(status) {
        if(status){
            if(carrito.length != 0){
                let numPedido = function numRandom(){
                    return parseInt((Math.random() * 123456) + 1)
                }
                document.getElementById("contenedor-carrito").innerHTML = `<h5 class="postCompra">Su pedido ha sido tomado correctamente. N° de pedido: ${numPedido()}</h5>`
                carrito = []
                localStorage.setItem('carrito', JSON.stringify(carrito))
                setTimeout(limpiar, 3000)
                actualizarPrecio()
            }else{
                document.getElementById("contenedor-carrito").innerHTML = `<h5 class="postCompra">Por favor, seleccione un producto para comprar</h5>`
                setTimeout(limpiar, 2000)
            }
        }
        function limpiar(){
            document.getElementById("contenedor-carrito").innerHTML = ""
        }
})
})


//Eliminar el carrito entero desde el modal
document.getElementById("eliminarCarrito").addEventListener('click', () =>{
    carrito.splice(0, carrito.length)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    document.getElementById("contenedor-carrito").innerHTML = ""
    arrayProductos.forEach(prod => {
        prod.cantidad = 0
    })
       

    Toastify({
        text: "Carrito eliminado correctamente",
        className: "info",
        style: {
        background: "#d73b3e",
        }
        }).showToast();
        actualizarPrecio()
    })
