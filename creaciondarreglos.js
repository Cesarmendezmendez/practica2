let arregloBidimensional = [];

function crearArreglo() {
  const filas = parseInt(document.getElementById("filasInput").value);
  const columnas = parseInt(document.getElementById("columnasInput").value);

  if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    alert("Ingrese números válidos para filas y columnas.");
    return;
  }

  arregloBidimensional = [];

  const arregloInputs = document.getElementById("arregloInputs");
  arregloInputs.style.display = "block";

  const arregloTabla = document.getElementById("arregloTabla");
  arregloTabla.innerHTML = "";

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("tr");
    arregloBidimensional.push([]);

    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      arregloBidimensional[i].push(0); // Inicializar con valor 0
      input.addEventListener("input", function(event) {
        actualizarValor(i, j, event);
      });
      celda.appendChild(input);
      fila.appendChild(celda);
    }

    arregloTabla.appendChild(fila);
  }
}

function actualizarValor(i, j, event) {
  const valor = parseFloat(event.target.value);
  arregloBidimensional[i][j] = isNaN(valor) ? 0 : valor;
}

function mostrarArreglo() {
  console.log("Arreglo Bidimensional:");
  console.log(arregloBidimensional);
}