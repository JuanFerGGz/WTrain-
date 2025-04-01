const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
function verificarUsuario(params) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].logged === true) {
            console.log("puedes cerrar sesion")
            linkCerrar.style.display = "block"
            linkIniciar.style.display = "none"
            return
        }
        
    }
    console.log("debes iniciar sesion")
     linkCerrar.style.display = "none"
    linkIniciar.style.display = "block"
}
verificarUsuario()
