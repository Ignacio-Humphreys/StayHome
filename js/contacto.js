const nombreForm = $('#nombre')
const telForm = $('#telefono')
const emailForm = $('#email')
const detallesForm = $('#detalles')


$(() => {
    $('#formCliente').submit((e) => {
       if(nombreForm.val().length != 0 && telForm.val().length <= 10 && telForm.val().length >= 8 && emailForm.val().length !=0 && detallesForm.val().length != 0) {
        console.log('Formulario enviado');
        e.preventDefault()
        Toastify({
            text: "Formulario enviado exitosamente. Te vamos a responder a la brevedad.",
            className: "info",
            style: {
                background: "#2e8f33",
            }
        }).showToast();
        $('#formCliente').trigger('reset')
    } else{
        console.log('Formulario no enviado');
        if(telForm.val().length > 10 || telForm.val().length < 8){
            e.preventDefault()
            Toastify({
                text: "El teléfono ingresado debe tener entre 8 y 10 dígitos de largo",
                className: "info",
                style: {
                    background: "red",
                }
            }).showToast();
        }else{
        e.preventDefault()
        Toastify({
            text: "Por favor, complete todos los campos del formulario correctamente",
            className: "info",
            style: {
                background: "red",
            }
        }).showToast();
        }
    }
    })
})