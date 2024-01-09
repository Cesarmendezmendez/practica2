// Función para solicitar el nombre de los equipos
function ingresarEquipos() {
    const equipos = [];
    for (let i = 1; i <= 8; i++) {
      const nombreEquipo = prompt(`Equipo${i}:`);
      equipos.push(nombreEquipo);
    }
    return equipos;
  }
  
  // Función para realizar una ronda de partidos y obtener ganadores
  function jugarRonda(equipos) {
    const ganadores = [];
    for (let i = 0; i < equipos.length; i += 2) {
      const equipoA = equipos[i];
      const equipoB = equipos[i + 1];
      const ganador = prompt(`a. ${equipoA} - b. ${equipoB}:`).toLowerCase();
      ganadores.push(ganador === 'a' ? equipoA : equipoB);
    }
    return ganadores;
  }
  
  // Función principal
  function simularCampeonato() {
    let equipos = ingresarEquipos();
    let ronda = 'Cuartos';
  
    while (equipos.length > 1) {
      console.log(`${ronda}:`);
      equipos = jugarRonda(equipos);
  
      // Actualizar ronda para el siguiente ciclo
      if (ronda === 'Cuartos') {
        ronda = 'Semifinales';
      } else if (ronda === 'Semifinales') {
        ronda = 'Finales';
      } else {
        ronda = 'El campeon es';
      }
    }
  
    // Mostrar al campeón
    console.log(`${ronda}: ${equipos[0]}`);
  }
  
  // Llamar a la función principal
  simularCampeonato();
  