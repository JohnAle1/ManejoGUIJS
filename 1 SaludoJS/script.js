document
  .getElementById("btnImprimir")
  .addEventListener("click", function () {
    const message = document.getElementById("InpMensaje").value;
    document.getElementById("txtResultado").innerText = message;
  });
