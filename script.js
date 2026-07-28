// 1. Buscador/Filtro en tiempo real
document.getElementById('buscador').addEventListener('keyup', function(e) {
    const textoBuscado = e.target.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.getAttribute('data-titulo').toLowerCase() + " " + tarjeta.innerText.toLowerCase();
        
        if (contenido.includes(textoBuscado)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});

// 2. Lógica del Quiz / Autoevaluación
function evaluarQuiz() {
    let puntos = 0;
    const p1 = document.querySelector('input[name="p1"]:checked');
    const p2 = document.querySelector('input[name="p2"]:checked');
    const resultadoDiv = document.getElementById('resultado-quiz');

    if (!p1 || !p2) {
        resultadoDiv.style.color = 'red';
        resultadoDiv.innerText = 'Por favor, responde todas las preguntas antes de enviar.';
        return;
    }

    if (p1.value === 'correcto') puntos++;
    if (p2.value === 'correcto') puntos++;

    if (puntos === 2) {
        resultadoDiv.style.color = '#27ae60';
        resultadoDiv.innerText = `¡Excelente! Obtuviste ${puntos}/2 puntos. Tienes excelentes hábitos de ciberseguridad.`;
    } else {
        resultadoDiv.style.color = '#e67e22';
        resultadoDiv.innerText = `Obtuviste ${puntos}/2 puntos. Revisa los consejos en la parte superior para reforzar tus conocimientos.`;
    }
}

// 3. Simulación de envío de formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const mensajeExito = document.getElementById('mensaje-exito');

    mensajeExito.innerText = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
    
    this.reset();
});