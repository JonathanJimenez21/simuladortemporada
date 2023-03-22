const tablateams = document.getElementById("tablaequipos");
const contenedortabla = document.getElementById("contenedor-tabla");
const botonsimular = document.getElementById("btngenerar");
const botonreset = document.getElementById("btnreset");
const inforesultados = document.getElementById("infoganador");
const botoncomosimula = document.getElementById("btnhowto");
botonreset.disabled = true;

function simularPrimeraVuelta() {
  limpiarDatos();
  let eq1;
  let eq2;
  for (let i = 0; i < equipos.length; i++) {
    for (let j = i + 1; j < equipos.length; j++) {
      eq1 = equipos[i];
      eq2 = equipos[j];
      eq1.l += 1;
      eq2.v += 1;
      simularPartido(eq1, eq2);
    }
  }
}

function simularSegundaVuelta() {
  let eq1;
  let eq2;
  for (let i = equipos.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      eq1 = equipos[i];
      eq2 = equipos[j];
      eq1.l += 1;
      eq2.v += 1;
      simularPartido(eq1, eq2);
    }
  }
  /*for (let y = 0; y < equipos.length; y++) {
    eq1 = equipos[y];
    console.log(
      eq1.nombre +
        " GF: " +
        eq1.golesfavor +
        " / " +
        "GC: " +
        eq1.golescontra +
        " / " +
        "DIF: " +
        eq1.diferenciagoles +
        " / " +
        "PTS: " +
        eq1.puntos
    );
  }*/
}

function simularPartido(equipo1, equipo2) {
  const goles1 = Math.floor(Math.random() * 6);
  const goles2 = Math.floor(Math.random() * 6);

  if (goles1 > goles2) {
    equipo1.golesfavor += goles1;
    equipo2.golesfavor += goles2;
    equipo1.golescontra += goles2;
    equipo2.golescontra += goles1;
    equipo1.diferenciagoles = equipo1.diferenciagoles + goles1 - goles2;
    equipo2.diferenciagoles = equipo2.diferenciagoles + goles2 - goles1;
    equipo1.puntos += 3;
    equipo1.ganados += 1;
    equipo2.derrotas += 1;
    console
      .log
      //equipo1.nombre + " " + goles1 + " / " + equipo2.nombre + " " + goles2
      ();
  } else if (goles2 > goles1) {
    equipo1.golesfavor += goles1;
    equipo2.golesfavor += goles2;
    equipo1.golescontra += goles2;
    equipo2.golescontra += goles1;
    equipo1.diferenciagoles = equipo1.diferenciagoles + goles1 - goles2;
    equipo2.diferenciagoles = equipo2.diferenciagoles + goles2 - goles1;
    equipo2.puntos += 3;
    equipo2.ganados += 1;
    equipo1.derrotas += 1;
    console
      .log
      //  equipo1.nombre + " " + goles1 + " / " + equipo2.nombre + " " + goles2
      ();
  } else {
    equipo1.golesfavor += goles1;
    equipo2.golesfavor += goles2;
    equipo1.golescontra += goles2;
    equipo2.golescontra += goles1;
    equipo1.puntos += 1;
    equipo2.puntos += 1;
    equipo1.empates += 1;
    equipo2.empates += 1;
    console
      .log
      //  equipo1.nombre + " " + goles1 + " / " + equipo2.nombre + " " + goles2
      ();
  }
}

function ordenarTabla() {
  equipos.sort(function (a, b) {
    if (a.puntos < b.puntos) {
      return 1;
    }
    if (a.puntos > b.puntos) {
      return -1;
    }

    if (a.diferenciagoles < b.diferenciagoles) {
      return 1;
    }
    if (a.diferenciagoles > b.diferenciagoles) {
      return -1;
    }
    if (a.golesfavor < b.golesfavor) {
      return 1;
    }
    if (a.golesfavor > b.golesfavor) {
      return -1;
    }
    if (a.golescontra < b.golescontra) {
      return -1;
    }
    if (a.golescontra > b.golescontra) {
      return 1;
    }
    if (a.ganados < b.ganados) {
      return 1;
    }
    if (a.ganados > b.ganados) {
      return -1;
    }
    if (a.derrotas < b.derrotas) {
      return -1;
    }
    if (a.derrotas > b.derrotas) {
      return 1;
    }
  });
  return equipos;
}

function generarTabla() {
  const general = ordenarTabla();
  const headequipo = document.createElement("th");
  const nodeheadequipo = document.createTextNode("Equipo");
  headequipo.appendChild(nodeheadequipo);
  tablateams.appendChild(headequipo);
  const headpartidos = document.createElement("th");
  const nodeheadpartidos = document.createTextNode("PJ");
  headpartidos.appendChild(nodeheadpartidos);
  tablateams.appendChild(headpartidos);
  const headpuntos = document.createElement("th");
  const nodeheadpuntos = document.createTextNode("PTS");
  headpuntos.appendChild(nodeheadpuntos);
  tablateams.appendChild(headpuntos);
  const headganados = document.createElement("th");
  const nodeheadganados = document.createTextNode("PG");
  headganados.appendChild(nodeheadganados);
  tablateams.appendChild(headganados);
  const headperdidos = document.createElement("th");
  const nodeheadperdidos = document.createTextNode("PP");
  headperdidos.appendChild(nodeheadperdidos);
  tablateams.appendChild(headperdidos);
  const headempates = document.createElement("th");
  const nodeheadempates = document.createTextNode("PE");
  headempates.appendChild(nodeheadempates);
  tablateams.appendChild(headempates);
  const headgolesfavor = document.createElement("th");
  const nodeheadgolesfavor = document.createTextNode("GF");
  headgolesfavor.appendChild(nodeheadgolesfavor);
  tablateams.appendChild(headgolesfavor);
  const headgolescontra = document.createElement("th");
  const nodeheadgolescontra = document.createTextNode("GC");
  headgolescontra.appendChild(nodeheadgolescontra);
  tablateams.appendChild(headgolescontra);
  const headdiferencia = document.createElement("th");
  const nodeheaddiferencia = document.createTextNode("DIF");
  headdiferencia.appendChild(nodeheaddiferencia);
  tablateams.appendChild(headdiferencia);

  for (let i = 0; i < general.length; i++) {
    let tabla = equipos[i];
    let partidostotales = tabla.l + tabla.v;
    const filaequipo = document.createElement("tr");

    const team = document.createElement("td");
    const nodeteam = document.createTextNode(tabla.nombre);
    team.appendChild(nodeteam);
    filaequipo.appendChild(team);
    tablateams.appendChild(filaequipo);

    const teampartidos = document.createElement("td");
    const nodepartidos = document.createTextNode(partidostotales);
    teampartidos.appendChild(nodepartidos);
    filaequipo.appendChild(teampartidos);
    tablateams.appendChild(filaequipo);

    const teampuntos = document.createElement("td");
    const nodepuntos = document.createTextNode(tabla.puntos);
    teampuntos.appendChild(nodepuntos);
    filaequipo.appendChild(teampuntos);
    tablateams.appendChild(filaequipo);

    const teamganes = document.createElement("td");
    const nodeganes = document.createTextNode(tabla.ganados);
    teamganes.appendChild(nodeganes);
    filaequipo.appendChild(teamganes);
    tablateams.appendChild(filaequipo);

    const teamderrotas = document.createElement("td");
    const nodederrotas = document.createTextNode(tabla.derrotas);
    teamderrotas.appendChild(nodederrotas);
    filaequipo.appendChild(teamderrotas);
    tablateams.appendChild(filaequipo);

    const teamempates = document.createElement("td");
    const nodeempate = document.createTextNode(tabla.empates);
    teamempates.appendChild(nodeempate);
    filaequipo.appendChild(teamempates);
    tablateams.appendChild(filaequipo);

    const teamgolesfavor = document.createElement("td");
    const nodegolesfavor = document.createTextNode(tabla.golesfavor);
    teamgolesfavor.appendChild(nodegolesfavor);
    filaequipo.appendChild(teamgolesfavor);
    tablateams.appendChild(filaequipo);

    const teamgolescontra = document.createElement("td");
    const nodegolescontra = document.createTextNode(tabla.golescontra);
    teamgolescontra.appendChild(nodegolescontra);
    filaequipo.appendChild(teamgolescontra);
    tablateams.appendChild(filaequipo);

    const teamdif = document.createElement("td");
    const nodeteamdif = document.createTextNode(tabla.diferenciagoles);
    teamdif.appendChild(nodeteamdif);
    filaequipo.appendChild(teamdif);
    tablateams.appendChild(filaequipo);
  }
}

function generarInfo() {
  const equipoganador = equipos[0];
  const u = equipos.length - 1;
  const equipoultimo = equipos[u];
  const teamganador = document.createElement("h2");
  const nodeganador = document.createTextNode("CAMPEÓN");
  teamganador.appendChild(nodeganador);
  inforesultados.appendChild(teamganador);

  const nombreganador = document.createElement("h3");
  const nodenombreganador = document.createTextNode(equipoganador.nombre);
  nombreganador.appendChild(nodenombreganador);
  inforesultados.appendChild(nombreganador);

  const teamultimo = document.createElement("h2");
  const nodeultimo = document.createTextNode("DESCENDIDO");
  teamultimo.appendChild(nodeultimo);
  inforesultados.appendChild(teamultimo);

  const nombreultimo = document.createElement("h3");
  const nodenombreultimo = document.createTextNode(equipoultimo.nombre);
  nombreganador.appendChild(nombreultimo);
  inforesultados.appendChild(nodenombreultimo);
}

function limpiarDatos() {
  let datos;
  for (let d = 0; d < equipos.length; d++) {
    datos = equipos[d];
    datos.puntos = 0;
    datos.ganados = 0;
    datos.derrotas = 0;
    datos.empates = 0;
    datos.l = 0;
    datos.v = 0;
    datos.golesfavor = 0;
    datos.golescontra = 0;
    datos.diferenciagoles = 0;
  }
}

function borrarTabla() {
  while (tablateams.firstChild) {
    tablateams.removeChild(tablateams.firstChild);
  }

  while (inforesultados.firstChild) {
    inforesultados.removeChild(inforesultados.firstChild);
  }
}

botonsimular.addEventListener("click", function () {
  simularPrimeraVuelta();
  simularSegundaVuelta();
  generarTabla();
  generarInfo();
  botonsimular.disabled = true;
  botonreset.disabled = false;
});

botonreset.addEventListener("click", function () {
  borrarTabla();
  botonsimular.disabled = false;
  botonreset.disabled = true;
});

botoncomosimula.addEventListener("click", function () {
  Swal.fire({
    title: "Simulador de resultados",
    text: "Al darle al botón 'Generar simulación' el sistema generará de forma aleatoria las 22 jornadas de futbol nacional \n junto a los resultados de los partidos y los goles de cada equipo \n y su respectiva tabla, mostrando además quien es el ganador y quien queda al último",
    imageUrl: "imagenes/unafut.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});
