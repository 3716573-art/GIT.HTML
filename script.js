// 1. Manejo de Pantalla de Entrada
function entrarAlSitio() {
    const splash = document.getElementById('welcome-screen');
    const content = document.getElementById('main-content');
    
    splash.style.transform = 'translateY(-100%)';
    
    setTimeout(() => {
        splash.style.display = 'none';
        content.style.display = 'block';
        window.scrollTo(0, 0);
    }, 800);
}

// 2. Buscador en Tiempo Real
document.getElementById('buscador').addEventListener('keyup', function(e) {
    const busqueda = e.target.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(tarjeta => {
        const info = tarjeta.innerText.toLowerCase();
        const data = tarjeta.getAttribute('data-titulo') ? tarjeta.getAttribute('data-titulo').toLowerCase() : '';
        
        if(info.includes(busqueda) || data.includes(busqueda)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});

// 3. Lógica del Quiz Expandido (5 Preguntas)
function evaluarQuiz() {
    let nota = 0;
    const r1 = document.querySelector('input[name="p1"]:checked');
    const r2 = document.querySelector('input[name="p2"]:checked');
    const r3 = document.querySelector('input[name="p3"]:checked');
    const r4 = document.querySelector('input[name="p4"]:checked');
    const r5 = document.querySelector('input[name="p5"]:checked');
    
    const display = document.getElementById('resultado-quiz');

    if(!r1 || !r2 || !r3 || !r4 || !r5) {
        display.innerHTML = "<p style='color: #ff9f43; margin-top:1.5rem; font-weight:bold;'>⚠️ Por favor responde las 5 preguntas para obtener tu evaluación.</p>";
        return;
    }

    if(r1.value === 'correcto') nota++;
    if(r2.value === 'correcto') nota++;
    if(r3.value === 'correcto') nota++;
    if(r4.value === 'correcto') nota++;
    if(r5.value === 'correcto') nota++;

    display.style.marginTop = "2rem";
    display.style.padding = "1.5rem";
    display.style.borderRadius = "10px";

    if(nota >= 4) {
        display.style.background = "rgba(0, 242, 255, 0.15)";
        display.style.border = "1px solid var(--primary)";
        display.innerHTML = `<h3 style='color: var(--primary)'>Puntaje Excelente: ${nota}/5</h3><p>¡Dominas los conceptos clave de seguridad digital!</p>`;
    } else {
        display.style.background = "rgba(112, 0, 255, 0.15)";
        display.style.border = "1px solid var(--secondary)";
        display.innerHTML = `<h3 style='color: var(--secondary)'>Puntaje: ${nota}/5</h3><p>Revisa la sección de Amenazas y Guía de Defensa para repasar los conceptos fallados.</p>`;
    }
}