const titulo = document.getElementyById("titulo");
const btnColor = document.getElementById("btmnColor");

btnColor.addEventListener("click", () => {
    titulo.style.color = titulo.style.color == "white" ? "black" : "white";

});