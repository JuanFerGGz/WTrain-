const users = JSON.parse(localStorage.getItem("user")) || [];

function verificarUsuario(params) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].logged === true) {
            console.log("puedes cerrar sesion")
            return
        }
        
    }
    console.log("debes iniciar sesion")
}
verificarUsuario()
