let boton = document.getElementById("btn-enviar")
let result = document.getElementById("formularioEnviado")

boton.addEventListener("click", () => {
  let alerta = result
  alerta.textContent = "Solicitud enviada con éxito"
})

function voltear(card) {
  // Con toggle, si la clase existe la quita, y si no, la pone
  card.classList.toggle('flipped');
}
