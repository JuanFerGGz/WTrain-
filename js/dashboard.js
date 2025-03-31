const user = JSON.parse (localStorage.getitem("user")) ||[]

const saludoUser = document.querySelector("#saludo-user")

for (let i = 0; i < array.length; i++) {
    if (user[i].logged === true) {
        saludoUser.textContent = `hola ${user[i].user}`
        
    }
}