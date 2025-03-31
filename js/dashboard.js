const user = JSON.parse (localStorage.getItem("user")) ||[]

const saludoUser = document.querySelector("#saludo-user")
const progreso = document.querySelector("#progreso")

for (let i = 0; i < user.length; i++) {
    if (user[i].logged === true) {
        console.log (user[i].user)
        saludoUser.textContent = `hola ${user[i].user}`
        progreso.textContent = `Progreso: ${user[i].progreso}%`
    }
}