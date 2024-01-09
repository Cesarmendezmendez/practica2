// Función para verificar si una solución de sudoku es correcta
function esSudokuCorrecto(sudoku) {
    // Verificar filas
    for (let i = 0; i < 9; i++) {
      const fila = sudoku[i];
      if (!esConjuntoCorrecto(fila)) {
        return false;
      }
    }
  
    // Verificar columnas
    for (let j = 0; j < 9; j++) {
      const columna = sudoku.map(fila => fila[j]);
      if (!esConjuntoCorrecto(columna)) {
        return false;
      }
    }
  
    // Verificar regiones de 3x3
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const region = obtenerRegion(sudoku, i, j);
        if (!esConjuntoCorrecto(region)) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Función para verificar si un conjunto de 9 elementos es correcto (sin repetir)
  function esConjuntoCorrecto(conjunto) {
    const conjuntoFiltrado = conjunto.filter(elemento => elemento !== 0);
    const conjuntoUnico = new Set(conjuntoFiltrado);
    return conjuntoFiltrado.length === conjuntoUnico.size;
  }
  
  // Función para obtener una región de 3x3 del sudoku
  function obtenerRegion(sudoku, inicioFila, inicioColumna) {
    const region = [];
    for (let i = inicioFila; i < inicioFila + 3; i++) {
      for (let j = inicioColumna; j < inicioColumna + 3; j++) {
        region.push(sudoku[i][j]);
      }
    }
    return region;
  }
  
  // Ejemplo de un sudoku resuelto
  const sudokuResuelto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  
  // Verificar si el sudoku resuelto es correcto
  if (esSudokuCorrecto(sudokuResuelto)) {
    console.log('La solución del sudoku es correcta.');
  } else {
    console.log('La solución del sudoku es incorrecta.');
  }
  