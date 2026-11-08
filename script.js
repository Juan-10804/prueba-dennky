console.log("Scrip cargando correctamente");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventaDefault();
    alert("Formulario Listo")

});