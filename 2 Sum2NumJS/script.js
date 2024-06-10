function sumar() {
  // Obtener los valores de los inputs
  const numero1 = parseFloat(document.getElementById("number1").value);
  const numero2 = parseFloat(document.getElementById("number2").value);

  // Verificar que ambos valores son números
  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").textContent =
      "Por favor, ingresa dos números válidos.";
    return;
  }

  // Calcular la suma
  const suma = numero1 + numero2;

  // Mostrar el resultado
  document.getElementById("resultado").textContent = `La suma es: ${suma}`;
}
