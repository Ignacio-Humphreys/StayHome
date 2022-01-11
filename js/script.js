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
const filtro = document.getElementById('tipoProd')
//let carrito;
let carrito = []

/*if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    carrito = []
}*/
if("carrito" in localStorage && JSON.parse(localStorage.getItem('carrito')).length > 0){
    let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    for(const p of carritoGuardado){
        carrito.push(new Productos(p.id, p.tipo, p.nombre, p.precio, p.extra, p.img, p.alt))
    }

    for(const prodSeleccionado of carrito){
        $('#contenedor-carrito').append(`<div class="productoEnCarrito">
        <p class="idCarrito">${prodSeleccionado.id}</p>
        <img class="imgCarrito" src="${prodSeleccionado.img}">
        <p class="nombreCarrito">${prodSeleccionado.nombre}</p>
        <p class="precioCarrito">Precio: $${prodSeleccionado.precio}</p>
        <i class="far fa-trash-alt boton-eliminar" id='eliminar${prodSeleccionado.id}'></i>
        </div>`)

    let btnEliminarProducto = document.getElementById(`eliminar${prodSeleccionado.id}`)
        btnEliminarProducto.addEventListener('click', () => {
            btnEliminarProducto.parentElement.remove()
            carrito = carrito.filter(borrarProd => borrarProd.id != prodSeleccionado.id)
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
}

//3. Lógica de productos renderizados
$.getJSON('stock.json', function(data){
    data.forEach(producto => arrayProductos.push(producto))
    mostrarProductos(arrayProductos)
})
    
    filtro.addEventListener('change', () =>{
    if(filtro.value == 'todos'){
        mostrarProductos(arrayProductos)
        console.log(arrayProductos);
    }else{
        mostrarProductos(arrayProductos.filter(producto => producto.tipo == filtro.value))
        console.log(arrayProductos.filter(producto => producto.tipo == filtro.value))
    }
})

function mostrarProductos(array){
    $('#landingCards').empty()
    for(prodDisponible of array){
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
    }
    
    arrayProductos.forEach(prodDisponible =>{
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
}
    


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


