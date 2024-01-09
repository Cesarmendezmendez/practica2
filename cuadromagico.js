// Función para verificar si un arreglo es consecutivo desde 1 hasta n^2
function esConsecutivo(arr) {
    const n = arr.length;
    const numerosEsperados = Array.from({ length: n * n }, (_, i) => i + 1);
  
    return JSON.stringify(arr.flat().sort((a, b) => a - b)) === JSON.stringify(numerosEsperados);
  }
  
  // Función para verificar si un arreglo es un cuadrado mágico
  function esCuadradoMagico(arr) {
    const n = arr.length;
    const sumaFila = (fila) => fila.reduce((suma, num) => suma + num, 0);
    const sumaColumna = (columna) => arr.reduce((suma, fila) => suma + fila[columna], 0);
    const sumaDiagonalPrincipal = () => arr.reduce((suma, fila, i) => suma + fila[i], 0);
    const sumaDiagonalSecundaria = () => arr.reduce((suma, fila, i) => suma + fila[n - i - 1], 0);
  
    const sumaEsperada = n * (n * n + 1) / 2;
  
    // Verificar filas y columnas
    for (let i = 0; i < n; i++) {
      if (sumaFila(arr[i]) !== sumaEsperada || sumaColumna(i) !== sumaEsperada) {
        return false;
      }
    }
  
    // Verificar diagonales
    if (sumaDiagonalPrincipal() !== sumaEsperada || sumaDiagonalSecundaria() !== sumaEsperada) {
      return false;
    }
  
    return true;
  }
  
  // Función principal
  function main() {
    // Solicitar al usuario ingresar el tamaño n del arreglo
    const n = parseInt(prompt('Inserte el tamaño n del arreglo cuadrado:'));
  
    // Solicitar al usuario ingresar el arreglo cuadrado
    const arreglo = [];
    console.log(`Ingrese el arreglo cuadrado de ${n}x${n}:`);
    for (let i = 0; i < n; i++) {
      const fila = prompt(`Ingrese la fila ${i + 1} (separada por comas):`).split(',').map(Number);
      arreglo.push(fila);
    }
  
    // Verificar si el arreglo es consecutivo y un cuadrado mágico
    if (esConsecutivo(arreglo)) {
      console.log('El arreglo sí tiene números consecutivos.');
      if (esCuadradoMagico(arreglo)) {
        console.log('El arreglo es un cuadrado mágico.');
      } else {
        console.log('El arreglo no es un cuadrado mágico.');
      }
    } else {
      console.log('El arreglo no tiene números consecutivos.');
    }
  }
  
  // Llamar a la función principal
  main();
  