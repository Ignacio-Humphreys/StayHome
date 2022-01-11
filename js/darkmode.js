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