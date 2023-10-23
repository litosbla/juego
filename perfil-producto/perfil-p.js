const did ={
    warzone: {
        imagen:'assets/warzone.jpg',
        precio:2000,
        estrellas:5,
        descripcion:'Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows. El modo juego está disponible en estas plataformas y es parte del videojuego de 2019, Call of Duty: Modern Warfare, pero no requiere su compra y se presentó durante la temporada 2 del contenido de Modern Warfare. Con la integración con Call of Duty: Vanguard pasó a denominarse Call of Duty: Warzone Pacific. Sus servidores se cerraron el 21 de septiembre de 2023.',
        imagen1:'assets/war1.jpg',
        imagen2:'assets/war2.webp',
        imagen3:'assets/war3.webp',

    }
}
const body = document.querySelector("body"),
    sidebar=body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn=body.querySelector(".search-box"),
    modeSwitch=body.querySelector(".toggle-switch"),
    imagenInicial = body.querySelector(".mid1 img"),
    spanDescription = body.querySelector(".texto-descipcion-juego"),
    spanEstrellas = body.querySelector(".estrellas"),
    spanTitulo = body.querySelector(".texto-al-secundario"),
    spanPrecio = body.querySelector(".precio"),
    imagen1Img = body.querySelector("#img1 img"),
    imagen2Img = body.querySelector("#img2 img"),
    imagen3Img = body.querySelector("#img3 img"),
    BotonComprar = body.querySelector(".registrarBtn"),
    PopUp = body.querySelector(".popup"),
    overlay = body.querySelector(".overlay"),
    botonSign = body.querySelector(".log-title"),
    opcionseSign = body.querySelector(".opciones"),
    inputUser = body.querySelector(".nombreInput"),
    inputEmail = body.querySelector(".input-icon input"),

    modeText=body.querySelector(".mode-text");


modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        modeText.innerHTML="Light Mode"
    }else{
        modeText.innerHTML="Dark Mode"
    }
})

toggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("close")
    
})



const nombre = new URLSearchParams(window.location.search).get('nombre').toString().toLowerCase();

window.onload = function(){
    imagenInicial.src = did[nombre].imagen
    spanDescription.textContent = did[nombre].descripcion
    spanTitulo.textContent = nombre.toUpperCase()
    spanPrecio.textContent = did[nombre].precio
    imagen1Img.src = did[nombre].imagen1
    imagen2Img.src = did[nombre].imagen2
    imagen3Img.src = did[nombre].imagen3
    for(let i = 0 ; i<did[nombre].estrellas;i++){
        spanEstrellas.innerHTML += "<i class='bx bxs-star' ></i>"
    }

}

BotonComprar.addEventListener("click", ()=> {
    if (localStorage.getItem('usuario')) {
        console.log('Hola'); 
      }
    else{
        PopUp.style.display = 'flex'
        overlay.style.display = 'block'
        console.log("funciona")
        /* display de un modal */
    }

})

function closepopup(){
    PopUp.style.display='none'
    overlay.style.display='none'
}

function MostrarSignUp(){
    opcionseSign.innerHTML=" <div class='input-icon'><i class='bx bx-user'></i><input type='text'></div><div class='input-icon'><i class='bx bx-envelope' ></i><input type='email'></div><div class='input-icon'><i class='bx bx-lock-alt' ></i><input type='password'></div><span class='log-title'>Sign Up</span>"
}
function MostrarSignIn(){
    opcionseSign.innerHTML="<div class='input-icon'><i class='bx bx-envelope' ></i><input type='email'></div><div class='input-icon'><i class='bx bx-lock-alt' ></i><input type='password'></div><span class='log-title'>Sign in</span>"

}

botonSign.addEventListener("click", ()=>{

})