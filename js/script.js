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
    mostrar(){
        return `
        <div class="row row-cols-3 row-cols-md-2 g-4">
                        <div class="row">
                            <div class="card" id="prod${this.id}">
                                <img src="${this.img}" class="card-img-top" alt="${this.alt}">
                                <div class="card-body">
                                    <h5 class="card-title">${this.nombre}</h5>
                                    <p class="card-text">Precio: $${this.precio}</p>
                                    <p class="extra_text">${this.extra}</p>
                                    <button id="boton${this.id}" class="btn btn-primary">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    `
    }
}

let arrayProductos = []

arrayProductos.push(new Productos(1, "Bombillas", "Bombillas personalizadas", 700, "", "media/bombilla_personalizada-1.png", "Bombilla Grabada Personalizada"))
arrayProductos.push(new Productos(2, "Chapas", "Barrita de acero rosé o dorado", 1600, "", "media/barrita_rose-1.png", "Barrita Rosé o Dorada Grabada"))
arrayProductos.push(new Productos(3, "Chapas", "Chapa para mascota grabada", 800, "", "media/chapa_mascota.png", "Chapa Para Mascotas Grabada"))
arrayProductos.push(new Productos(4, "Chapas", "Chapa para mascota calada", 900, "", "media/chapa_mascota_calada.png", "Chapa Para Mascotas Calada"))
arrayProductos.push(new Productos(5, "Chapas", "Minimedallas para mascotas", 700, "Con grabado al dorso = $900", "media/minimedalla_mascota.png", "Minimedallas Para Mascotas"))
arrayProductos.push(new Productos(6, "Llaveros", "Llaveros bodys de bebé", 800, "", "media/llavero_body-1.png", "Llavero Bodys de Bebé"))
arrayProductos.push(new Productos(7, "Llaveros", "Llavero con código Spotify", 1000, "Te grabamos el código de la canción de Spotify que quieras!", "media/cadena_spotify.png", "Llavero Código Spotify"))
arrayProductos.push(new Productos(8, "Llaveros", "Llavero corazón o estrella grabado", 800, "Solo frases de catálogo, consultar precio por frases personalizadas", "media/llavero_estrella.png", "Llavero Con Forma de Estrella"))
arrayProductos.push(new Productos(9, "Llaveros", "Conjunto llavero rompecabezas", 1800, "", "media/rompecabezas-1.png", "Llavero en Conjunto Tipo Rompecabezas"))
arrayProductos.push(new Productos(10, "Llaveros", "Llaveros cuadrados o calendario con minicorazón", 1000, "", "media/llavero_cuadrado_corazon-1.png", "Llavero Cuadrado con Minicorazón"))
arrayProductos.push(new Productos(11, "Llaveros", "Conjunto llavero de corazón calado", 1800, "", "media/conjunto_corazon_calado.png", "Conjunto de Llaveros con Corazón Calado"))
arrayProductos.push(new Productos(32, "Llaveros", "Llavero cuadrado sin minicorazón", 800, "", "media/llavero_cuadrado.png", "Llavero Cuadrado Grabado"))
arrayProductos.push(new Productos(12, "Cadenas", "Barrita con cadena", 1100, "", "media/barrita_con_cadena-1.png", "Barrita con Cadena"))
arrayProductos.push(new Productos(13, "Cadenas", "Medalla calada con cadena", 2500, "", "media/medalla_calada_cadena.png", "Medalla Calada con Cadena"))
arrayProductos.push(new Productos(14, "Cadenas", "Nombres en acero quirúrjico", 1500, "", "media/nombres_acero-1.png", "Nombres Tallados en Acero Quirúrjico"))
arrayProductos.push(new Productos(15, "Cadenas", "Nombres calados en acero dorado", 1800, "", "media/nombres_dorado.png", "Nombres Tallados en Acero Dorado"))
arrayProductos.push(new Productos(16, "Cadenas", "Cadena con dije de corazón de 2,5cm", 1200, "", "media/corazon_2.5cm.png", "Dije de Corazón de 2,5 Centímetros"))
arrayProductos.push(new Productos(17, "Cadenas", "Cadena con dije de corazón de 2cm", 1000, "", "media/corazon_2cm.png", "Dije de Corazón de 2 Centímetros"))
arrayProductos.push(new Productos(18, "Cadenas", "Cadena con constelación", 1900, "", "media/constelacion.png", "Cadena con Constelación"))
arrayProductos.push(new Productos(19, "Cadenas", "Cadena con medalla grabada de 3cm", 1100, "", "media/medalla_3cm-1.png", "Cadena con Medalla Grabada de 3 Centímetros"))
arrayProductos.push(new Productos(20, "Cadenas", "Infinito con doble nombre en acero quirúrjico", 3000, "", "media/infinito.png", "Símbolo Infinito con Dos Nombres Tallados en Acero Quirúrjico"))
arrayProductos.push(new Productos(21, "Cadenas", "Fotomedalla con cadena", 1200, "", "media/fotomedalla.png", "Cadena con Fotomedalla"))
arrayProductos.push(new Productos(22, "Cadenas", "Conjunto cadena rompecabezas", 1800, "", "media/rompecabezas-2.png", "Conjunto de Cadenas Rompecabeza"))
arrayProductos.push(new Productos(23, "Cadenas", "Barrita con corazón de oro dublé", 1500, "", "media/barrita_oro_duble.png", "Barrita Grabada con Corazón de Oro Dublé"))
arrayProductos.push(new Productos(24, "Cadenas", "Cadena con letras", 350, "Desde $350. Cada letra adicional = $250", "media/letras_con_cadena.png", "Cadena Con Letras Varias"))
arrayProductos.push(new Productos(25, "Cadenas", "Donas rusas con cadena", 1000, "Cada dona adicional = $900", "media/donas_rusas.png", "Cadena Con Donas Rusas"))
arrayProductos.push(new Productos(26, "Cadenas", "Maxiletras con cadena", 1200, "", "media/maxiletras-1.png", "Cadena Con Maxiletra"))
arrayProductos.push(new Productos(27, "Cadenas", "Medallón triple con cadena", 2300, "", "media/medallon_triple.png", "Cadena Con Medallón Triple"))
arrayProductos.push(new Productos(28, "Pulseras", "Barrita con pulsera", 1100, "", "media/pulsera_barrita-1.png", "Pulsera Con Barrita Grabada"))
arrayProductos.push(new Productos(29, "Pulseras", "Pulsera hombre c/ cadena grumet", 1200, "", "media/pulsera_grumet.png", "Pulsera hombre c/ cadena grumet"))
arrayProductos.push(new Productos(30, "Pulseras", "Pulsera con minimedalla", 800, "Cada medalla adicional tiene un valor de $400", "media/minimedalla-1.png", "Pulsera Con Múltiples Minimedallas"))
arrayProductos.push(new Productos(31, "Pulseras", "Pulseras esclavas abiertas", 1100, "", "media/pulsera_esclava.png", "Pulsera Tipo `Esclava`"))


//2. Lógica carrito
let cardProd = document.getElementById("landingCards")
let eliminarCarrito = document.getElementById("eliminarCarrito")
let carrito;
//let storageCarrito = JSON.parse(localStorage.getItem('carrito'))

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    carrito = []
}

//Mostramos solo los productos principales y luego pusheamos los elegidos al carrito
arrayProductos.filter(prodDisponible => prodDisponible.id <= 12).forEach(prodDisponible =>{
    cardProd.innerHTML += prodDisponible.mostrar()  
    
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
                                <p class="precioCarrito">Precio:$${agregarProducto.precio}</p>
                                <button class="boton-eliminar" id='eliminar${agregarProducto.id}'><i class="fas fa-trash-alt"></i></button>
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

if('carrito' in localStorage && JSON.parse(localStorage.getItem('carrito')).length > 0){
    var carritoActual = JSON.parse(localStorage.getItem('carrito'))
    let carritoModal = document.getElementById("contenedor-carrito")
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

