const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
//const modulos = document.querySelector("#ver-modulos")
//const noModulos = document.querySelector("#no-modulos")
const menuHorizontal = document.querySelector(".menu-horizontal")
function verificarUsuario() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].logged === true) {
            console.log("puedes cerrar sesion")
            /* linkCerrar.style.display = "block"
            linkIniciar.style.display = "none" */
            menuHorizontal.innerHTML = `
                <li><a href="./index.html">Inicio</a></li>
			    <li>
				
				<a id="ver-modulos" href="./vistas/Módulos.html">Módulos</a>
				<ul class="menu-vertical">
					<li><a href="./vistas/fitness.html">Introducción</a></li>
					<li><a href="./vistas/basicos.html">Básicos</a></li>
					<li><a href="./vistas/salud.html">Salud</a></li>
                    <li><a href="./vistas/disponibilidad.html">Disponibilidad</a></li>
					<li><a href="./vistas/tecnicas1.html">Técnicas 1</a></li>
					<li><a href="./vistas/personalizacion.html">Personalización</a></li>
                    <li><a href="./vistas/tecnicas2.html">Técnicas 2</a></li>
					<li><a href="./vistas/evaluacion.html">Evaluación</a></li>
				</ul>
			</li>
			<li>
				<a id="link-cerrar" href="./vistas/cerrarsesion.html">Cerrar sesión</a>
				
				
			</li>
			
			<li>
				<a href="#">Otros</a>
				<ul class="menu-vertical">
					<li><a href="./vistas/Desarrollo.html">Inicio y Progreso</a></li>
					<li><a href="./vistas/acerca.html">Sobre nosotros</a></li>
                    
			
				</ul>
			</li>
			<li><a class="coso" href="./vistas/usuario.html"><img class="user" src="./sources/images/usuario.png"width="30" alt="Botón"></a></li>
            `
            
            return
        }
        
    }
    console.log("debes iniciar sesion")
    /*  linkCerrar.style.display = "none"
    linkIniciar.style.display = "block" */
    menuHorizontal.innerHTML = `
                <li><a href="./index.html">Inicio</a></li>

			<li>
				<a id="link-iniciar" href="./vistas/iniciosesion.html">Iniciar sesión</a>
				
			</li>
			
			<li>
				<a href="#">Otros</a>
				<ul class="menu-vertical">
					<li><a href="./vistas/Desarrollo.html">Inicio y Progreso</a></li>
					<li><a href="./vistas/acerca.html">Sobre nosotros</a></li>
                    
			
				</ul>
			</li>
			
            `
   
}
verificarUsuario()
