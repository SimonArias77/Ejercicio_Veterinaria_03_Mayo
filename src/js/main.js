const main = document.querySelector("#section__001")
const btnClear = document.querySelector("#btn-clear")

btnClear.addEventListener('click', clearMain)

function index() {
    main.innerHTML = ""
    for (const mascota of mascotas) {
        main.innerHTML += `
    <article class="card text-center">
        <img src="${mascota.imagen}" class="card-img-top" alt="${mascota.nombre}"
            title="${mascota.nombre}">
        <h2>${mascota.nombre}</h2>
        <div class="card-body d-flex justify-content-around align-items-center">
            <div>
                <p><strong>Especie:</strong> ${mascota.especie}</p>
                <p><strong>Raza:</strong> ${mascota.raza}</p>
                <p><strong>Edad:</strong> ${mascota.edad}</p>
                <p><strong>Peso:</strong> ${mascota.peso}</p>
                <p><strong>Estado:</strong> ${mascota.estado}</p>
            </div>
            <div>
                <p><strong>Nombre del dueño:</strong> ${mascota.propietario.nombre}</p>
                <p><strong>Documento del dueño:</strong> ${mascota.propietario.documento}</p>
                <p><strong>Telefono del dueño:</strong> ${mascota.propietario.telefono}</p>
                <p><strong>Correo del dueño:</strong> ${mascota.propietario.correo}</p>
            </div>
        </div>
        <div>
            <a class="btn btn-dark w-25" type="button"> detalles</a>
        </div>
    </article>
    `
    }
}

function clearMain() {
    main.innerHTML = '';
}

index()
