

const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const email = document.getElementById("correo")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")




form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length < 6){
        alert("nombre muy corto") 
    }
})


