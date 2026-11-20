// abrir y cerrar el menu en el celular
const botonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav ul");

if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
  });
}


document.getElementById("anio").textContent = new Date().getFullYear();

// Redirigir el formulario a una página de agradecimiento dentro del mismo sitio.
const siguiente = document.getElementById("siguiente");
if (siguiente) {
  siguiente.value = new URL("gracias.html", window.location.href).href;
}


const formularioBusqueda = document.getElementById("buscar-habilidad");
const campoBusqueda = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

function mostrarResultado(textoBusqueda) {
  if (!resultado || !textoBusqueda) return;

  const habilidades = document.querySelectorAll(".habilidades span");
  const texto = textoBusqueda.trim().toLowerCase();

  const encontrada = Array.from(habilidades).some((habilidad) =>
    habilidad.textContent.toLowerCase().includes(texto)
  );

  resultado.textContent = encontrada
    ? `Sí manejo ${textoBusqueda}.`
    : `Todavía no manejo ${textoBusqueda}, pero lo puedo aprender.`;
}

if (formularioBusqueda && campoBusqueda) {
  formularioBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mostrarResultado(campoBusqueda.value);
  });
}


const buscar = new URLSearchParams(window.location.search).get("buscar");
if (buscar) {
  campoBusqueda.value = buscar;
  mostrarResultado(buscar);
}
