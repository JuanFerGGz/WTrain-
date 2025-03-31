const formRegistro = document.querySelector ("#formRegistro")
const inputUserName = document.querySelector  ("#inputUserName")
const inputUserPass = document.querySelector  ("#inputUserPass")

function registroDatos(e) {
    e.preventDefault()
    let user = {
        user: inputUserName.value,
        pass: inputUserPass.value,
        correo: "admin@admin.com", 
        apodo: "pepe",
        logged: false,
        progreso: 0,
        certificado: false
    }

        console.log(inputUserName.value)    
        console.log(inputUserPass.value)    

         const users = JSON.parse(localStorage.getItem("user")) || [];

        users.push(user)

        localStorage.setItem("user" , JSON.stringify(users) )
 /*        localStorage.setItem("password", inputUserPass.value) */

        const cajitaMensaje = document.createElement("p");
        cajitaMensaje.innerHTML = `Usuario registrado😉, ya puedes <a href="./iniciosesion.html">INICIAR SESIÓN</a>`

        formRegistro.appendChild(cajitaMensaje)

        formRegistro.reset()
}
formRegistro.addEventListener("submit", registroDatos)

