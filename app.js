const body = document.querySelector("body"),
    sidebar=body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn=body.querySelector(".search-box"),
    modeSwitch=body.querySelector(".toggle-switch"),
    slides = body.querySelectorAll(".slide"),
    cajas= body.querySelectorAll(".caja"),
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

slides.forEach(slide => {
    const texto = slide.querySelector('.carousel-text').textContent.toLowerCase();
    slide.addEventListener("click",()=>{
        window.open(`perfil-p.html?nombre=${texto}`);
    })
    
});

cajas.forEach(caja => {
    const texto = caja.querySelector('.title').textContent.toLowerCase();
    caja.addEventListener("click",()=>{
        window.open(`perfil-p.html?nombre=${texto}`);
    })
});