// Solicitar al usuario la cantidad de datos a ingresar
const cantidadDatos = parseInt(prompt('Ingrese la cantidad de datos que desea ingresar:'));

// Validar que se ingrese un número válido
if (isNaN(cantidadDatos)) {
  alert('Por favor, ingrese un número válido.');
} else {
  const datos = [];

  // Pedir al usuario que ingrese los datos
  for (let i = 0; i < cantidadDatos; i++) {
    const dato = parseFloat(prompt(`Ingrese el dato ${i + 1}:`));
    datos.push(dato);
  }

  // Calcular el promedio de los datos ingresados
  const sumaDatos = datos.reduce((sum, dato) => sum + dato, 0);
  const promedio = sumaDatos / cantidadDatos;

  // Contar cuántos datos son mayores al promedio
  let mayoresAlPromedio = 0;
  for (let i = 0; i < cantidadDatos; i++) {
    if (datos[i] > promedio) {
      mayoresAlPromedio++;
    }
  }

  // Mostrar la cantidad de datos mayores al promedio
  alert(`El promedio de los datos ingresados es: ${promedio.toFixed(2)}. La cantidad de datos mayores al promedio es: ${mayoresAlPromedio}`);
}
