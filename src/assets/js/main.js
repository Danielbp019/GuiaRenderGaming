// Buscador
function filtrarIndice() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#indice li");
  let resultado = false;

  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(input)) {
      item.style.display = "list-item";
      resultado = true;
    } else {
      item.style.display = "none";
    }
  });

  let mensaje = document.getElementById("mensaje");
  if (!resultado) {
    mensaje.style.display = "block";
    mensaje.innerText = "No se encontraron resultados.";
  } else {
    mensaje.style.display = "none";
  }

  /* Limpieza del input al pulsar el boton */
  document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("search").value = "";
    filtrarIndice(); // Llamar a la función para que actualice la lista
  });
}
