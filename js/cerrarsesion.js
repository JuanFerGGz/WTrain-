const user = JSON.parse(localStorage.getItem("user")) || []

for (let i = 0; i < array.length; i++) {
    if ( user[i].logged) {
        user[i].logged = "false"
        localStorage.setItem("user",JSON.stringify(user))
    }
}
window.location = "../index.html"