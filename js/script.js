document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const curso = document.getElementById('opciones').value;

    // Validar que se haya seleccionado un curso
    if (curso === 'opcion0') {
        alert('Por favor selecciona un curso válido.');
        return;
    }

    // Agregar los valores a la tabla
    const tablaCuerpo = document.getElementById('tablaCuerpo');
    const fila = tablaCuerpo.insertRow();
    fila.insertCell(0).textContent = nombre;
    fila.insertCell(1).textContent = apellidos;
    fila.insertCell(2).textContent = telefono;
    fila.insertCell(3).textContent = document.getElementById('opciones').options[document.getElementById('opciones').selectedIndex].text;

    // Limpiar el formulario
    document.getElementById('formulario').reset();
});

// Funcionalidad para exportar la tabla a Excel
document.getElementById('exportarExcel').addEventListener('click', function() {
    const tabla = document.getElementById('tabla');
    const wb = XLSX.utils.table_to_book(tabla, { sheet: "Inscripciones" });
    XLSX.writeFile(wb, 'inscripciones_casa_cultura.xlsx');
});
