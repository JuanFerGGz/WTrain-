const formRegistro = document.querySelector ("#formRegistro")
const inputUserName = document.querySelector  ("#inputUserName")
const inputUserPass = document.querySelector  ("#inputUserPass")


const user = JSON.parse(localStorage.getItem("user")) || []


function validarUsuario(e) {
    e.preventDefault()

    for (let i = 0; i < user.length; i++) {
       
    if(user[i].user === inputUserName.value && user[i].pass === inputUserPass.value){
        console.log("Bienvenido")
        user[i].logged = true
        localStorage.setItem("user", JSON.stringify(user))
       /*  window.location = "..//vistas/Módulos.html" */ 
       return
    }
}

        console.log("datos incorrectos")
    
        formRegistro.reset()
        
   
}
formRegistro.addEventListener("submit", validarUsuario)

