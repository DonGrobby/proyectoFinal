const citasData = [
    {
        id: 1,
        fecha: "03/01/2023",
        hora: "03:45 PM",
        mascota: "Rocky",
        veterinario: "Dr. Miller",
        servicio: "Cirugía",
        estado: "Pendiente",
    },
    {
        id: 2,
        fecha: "03/01/2023",
        hora: "03:45 PM",
        mascota: "Rocky",
        veterinario: "Dr. Miller",
        servicio: "Cirugía",
        estado: "Completada",
    },
    {
        id: 3,
        fecha: "03/01/2023",
        hora: "03:45 PM",
        mascota: "Rocky",
        veterinario: "Dr. Miller",
        servicio: "Cirugía",
        estado: "Cancelada",
    },
    // Puedes agregar más objetos según sea necesario
];

// Función para construir la tarjeta de cita
function construirTarjetaCita(cita) {
    const card = document.createElement("div");
    card.className = "card mb-3 col-md-6 position-relative";

    const estadoCita = document.createElement("div");
    estadoCita.className = "estado-cita";
    estadoCita.textContent = cita.estado;

    // Asigna un color de fondo diferente según el estado
    switch (cita.estado.toLowerCase()) {
        case "completada":
            estadoCita.style.backgroundColor = "#80b918";
            break;
        case "pendiente":
            estadoCita.style.backgroundColor = "#fbb02d";
            break;
        case "cancelada":
            estadoCita.style.backgroundColor = "#ef233c";
            break;
        default:
            estadoCita.style.backgroundColor = "gray";
    }

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Cita #${cita.id}</h5>
        <p class="card-text"><i class="fas fa-calendar-alt"></i> Fecha: ${cita.fecha}</p>
        <p class="card-text"><i class="fas fa-paw"></i> Mascota: ${cita.mascota}</p>
        <p class="card-text"><i class="fas fa-medkit"></i> Servicio: ${cita.servicio}</p>
        <p class="card-text"><i class="fas fa-clock"></i> Hora: ${cita.hora}</p>
        <p class="card-text"><i class="fas fa-user-md"></i> Veterinario: ${cita.veterinario}</p>
        ${cita.estado.toLowerCase() === "pendiente" ? `
        <button class="btn btn-danger">Cancelar</button>
        <button class="btn btn-warning">Posponer</button>
      ` : ''}</div>
    `;

    // Agrega el estado de la cita a la tarjeta
    card.appendChild(estadoCita);

    return card;
}


const citasContainer = document.getElementById("citas-container");
const row = document.createElement("div");
row.className = "row";
citasData.forEach((cita) => {
    const citaCard = construirTarjetaCita(cita);
    row.appendChild(citaCard);
});
citasContainer.appendChild(row);


