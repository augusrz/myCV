console.log("hola");

// Asignar al elemento h1 la clase animacion-titulo y borrar esa asignacion pasado 1 segundo
let titulo = document.querySelector("h1");

titulo.classList.add("animacion-titulo");

console.log("titulo", titulo.className);

setTimeout(() => {
    titulo.classList.remove("animacion-titulo");
}, 1000);

let formulario = document.querySelector("#contacto form");

console.log("formulario", formulario);

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = evento.target.querySelector("input[name='nombre']").value;
    const correo = evento.target.querySelector("input[name='correo']").value;
    const apellido = evento.target.querySelector("input[name='apellido']").value;
    const mensaje = evento.target.querySelector("textarea[name='mensaje']").value;

    if (!nombre || !apellido || !correo || !mensaje) {
        alert("Debe completar todos los campos del formulario");
    } else {
        alert("Mensaje enviado con éxito");
    }
    // console.log("mensaje", nombre);
});

const habilidades = document.querySelectorAll("#habilidades li");

habilidades.forEach((habilidad) => {
    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - porcentajeInicio;
    const background = `linear-gradient(to right, green ${porcentajeInicio}%, white ${porcentajeFinal}%)`;
    habilidad.style.background = background;
});
