let boton = document.getElementById("btn-enviar")
let result = document.getElementById("formularioEnviado")

boton.addEventListener("click", () => {
  let alerta = result
  alerta.textContent = "Solicitud enviada con éxito"
})
