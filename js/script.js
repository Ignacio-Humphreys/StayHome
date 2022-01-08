//1. Construcción básica de objetos

class Productos{
    constructor(id, tipo, nombre, precio, extra, img, alt){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.extra = extra;
        this.img = img;
        this.alt = alt;
    }
}

let arrayProductos = []


//2. Lógica carrito
let cardProd = document.getElementById("landingCards")
let eliminarCarrito = document.getElementById("eliminarCarrito")
let sumaPrecio = document.getElementById("sumaPrecio")
let carrito;

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    carrito = []
}

$.getJSON('stock.json', function(data){
    data.forEach(producto => arrayProductos.push(producto))
    //Mostramos solo los productos principales y luego pusheamos los elegidos al carrito
    arrayProductos.forEach(prodDisponible =>{
        cardProd.innerHTML += `<div class="row row-cols-3 row-cols-md-2 g-4">
                                <div class="row">
                                    <div class="card" id="card prod${prodDisponible.id}">
                                        <img src="${prodDisponible.img}" class="card-img-top" alt="${prodDisponible.alt}">
                                        <div class="card-body">
                                            <h5 class="card-title">${prodDisponible.nombre}</h5>
                                            <p class="card-text">Precio: $${prodDisponible.precio}</p>
                                            <p class="extra-text">${prodDisponible.extra}</p>
                                            <button id="boton${prodDisponible.id}" class="btn btn-primary btnAgregar">Añadir al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`  
    })
    arrayProductos.filter(prodDisponible => prodDisponible.id <= 12).forEach(prodDisponible =>{
        document.getElementById(`boton${prodDisponible.id}`).addEventListener('click', () =>{
            agregarAlCarrito(prodDisponible.id)            
            
            Toastify({
                text: "Producto agregado al carrito",
                className: "info",
                style: {
                background: "mediumpurple",
                }
              }).showToast();
        })  
        
        })
})

function agregarAlCarrito(idSeleccionado){    
    let agregarProducto = arrayProductos.find(prodElegido => prodElegido.id == idSeleccionado)
    carrito.push(agregarProducto)
    mostrarCarrito(agregarProducto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
    }
    function mostrarCarrito(agregarProducto){
    let divCarrito = document.getElementById('contenedor-carrito')
    divCarrito.innerHTML += `<div class="productoEnCarrito">
                                <p class="idCarrito">${agregarProducto.id}</p>
                                <img class="imgCarrito" src="${agregarProducto.img}">
                                <p class="nombreCarrito">${agregarProducto.nombre}</p>
                                <p class="precioCarrito">Precio: $${agregarProducto.precio}</p>
                                <i class="far fa-trash-alt boton-eliminar" id='eliminar${agregarProducto.id}'></i>
                            </div>`
    
    let btnEliminarProducto = document.getElementById(`eliminar${agregarProducto.id}`)
    btnEliminarProducto.addEventListener('click', () => {
    btnEliminarProducto.parentElement.remove()
    carrito = carrito.filter(borrarProd => borrarProd.id != agregarProducto.id)
        Toastify({
            text: "Producto Eliminado",
            className: "info",
            style: {
            background: "#d73b3e",
            }
        }).showToast();
    
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    
    }

        
    //Eliminar el carrito entero desde el modal
    document.getElementById("eliminarCarrito").addEventListener('click', () =>{
        carrito.splice(0, carrito.length)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        document.getElementById("contenedor-carrito").innerHTML = ""
        
        Toastify({
            text: "Carrito eliminado correctamente",
            className: "info",
            style: {
            background: "#d73b3e",
            }
          }).showToast();
        })


//DarkMode
let darkMode;

if(localStorage.getItem('darkMode')){ //Consulto si existe en el localStorage el darkMode
    darkMode = localStorage.getItem('darkMode')
} else{
    darkMode = 0
}

localStorage.setItem("darkMode", darkMode)

$(() =>{
    if(localStorage.getItem('darkMode') == 1){
        $('body, nav').addClass("oscuro")
        $('a').addClass("oscuroA")
        $('footer').addClass("oscuroFooter")
        $('#darkModeBtn').hide()
        $('#lightModeBtn').fadeIn("slow")
    }else{
        $('#lightModeBtn').hide()
    }
    $('#darkModeBtn').click(() =>{
        $('#darkModeBtn').hide()
        $('#lightModeBtn').fadeIn("slow")
        $('body, nav').addClass("oscuro")
        $('a').addClass("oscuroA")
        $('footer').addClass("oscuroFooter")
        localStorage.setItem('darkMode', 1) 
    })
    $('#lightModeBtn').click(() =>{
        $('#lightModeBtn').hide()
        $('#darkModeBtn').fadeIn("slow")
        $('body, nav').removeClass("oscuro")
        $('a').removeClass("oscuroA")
        $('footer').removeClass("oscuroFooter")
        localStorage.setItem('darkMode', 0)
    })
})