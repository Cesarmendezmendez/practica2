// Solicitar al usuario la cantidad de números a ingresar
const cantidadNumeros = parseInt(prompt('Ingrese la cantidad de números que desea ingresar:'));

// Validar que se ingrese un número válido
if (isNaN(cantidadNumeros)) {
  alert('Por favor, ingrese un número válido.');
} else {
  const numeros = [];

  // Pedir al usuario que ingrese los números
  console.log('Ingrese los números:');
  for (let i = 0; i < cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Número ${i + 1}:`));
    numeros.push(numero);
  }

  // Pedir al usuario el valor con el que comparar
  const valorComparar = parseFloat(prompt('Ingrese el valor con el que desea comparar:'));

  // Validar que se ingrese un número válido
  if (isNaN(valorComparar)) {
    alert('Por favor, ingrese un número válido.');
  } else {
    // Contar cuántos números son mayores al valor indicado
    const mayores = numeros.filter(numero => numero > valorComparar).length;

    // Mostrar la cantidad de números mayores al valor indicado
    alert(`De tu lista, ${mayores} valores son mayores a ${valorComparar}.`);
  }
}
