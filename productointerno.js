// Función para calcular el producto interno de dos listas
function productoInterno(listaA, listaB) {
    let resultado = 0;
    for (let i = 0; i < listaA.length; i++) {
      resultado += listaA[i] * listaB[i];
    }
    return resultado;
  }
  
  // Función para verificar si dos listas son ortogonales
  function sonOrtogonales(listaA, listaB) {
    return productoInterno(listaA, listaB) === 0;
  }
  
  // Función principal
  function main() {
    // Solicitar al usuario ingresar el vector a
    const vectorA = [];
    console.log("Ingrese el vector a:");
    for (let i = 0; i < 3; i++) {
      const elementoA = parseInt(prompt(`Ingrese el elemento ${i + 1}:`));
      vectorA.push(elementoA);
    }
  
    // Solicitar al usuario ingresar el vector b
    const vectorB = [];
    console.log("Ingrese el vector b:");
    for (let i = 0; i < 3; i++) {
      const elementoB = parseInt(prompt(`Ingrese el elemento ${i + 1}:`));
      vectorB.push(elementoB);
    }
  
    // Mostrar los vectores ingresados
    console.log(`a: [${vectorA.join(', ')}]`);
    console.log(`b: [${vectorB.join(', ')}]`);
  
    // Calcular y mostrar el producto interno
    const resultadoProductoInterno = productoInterno(vectorA, vectorB);
    console.log(`Producto interno entre a y b: ${resultadoProductoInterno}`);
  
    // Verificar y mostrar si son ortogonales
    if (sonOrtogonales(vectorA, vectorB)) {
      console.log("a y b son ortogonales.");
    } else {
      console.log("a y b no son ortogonales.");
    }
  }
  
  // Llamar a la función principal
  main();
  
