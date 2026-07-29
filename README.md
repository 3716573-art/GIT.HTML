# CiberEdu 🛡️ - Sistema de Entrenamiento en Ciberseguridad

**CiberEdu** es una aplicación web interactiva de una sola página (*Single Page Application*) diseñada para entrenar a estudiantes en hábitos de seguridad digital, prevención de amenazas y protección de datos académicos.

---

## 🚀 Novedades y Características

* **Pantalla de Inicio Interactiva (Protocolo de Entrada):** Splash screen a pantalla completa que requiere la interacción del usuario para desplegar el contenido.
* **Experiencia SPA (Single Page Application):** Toda la navegación, lectura, búsqueda y evaluación ocurren de forma fluida en un único archivo HTML.
* **Interfaz Cyberpunk / Dark Mode:** Estética futurista con fuentes tipográficas (*Orbitron* y *Poppins*), sombras neón y efectos de transparencia.
* **Módulo de Amenazas en Imágenes:** Grid dinámico con tarjetas responsivas que revelan información detallada al pasar el cursor (*hover*).
* **Defensa & Buscador Integrado:** Filtro dinámico en tiempo real que oculta o muestra tarjetas según los términos buscados.
* **Prueba de Campo (Quiz de 5 Preguntas):** Cuestionario interactivo basado en todo el material teórico del sitio para validar los aprendizajes sin recarga de página.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica en una sola vista.
* **CSS3:** Flexbox, CSS Grid, variables, efectos de desenfoque (*backdrop-filter*) y animaciones neón.
* **JavaScript (ES6):** Manipulación del DOM para transiciones, motor de búsqueda en tiempo real y evaluación dinámica del test.
* **Google Fonts:** Fuentes *Orbitron* y *Poppins*.

---

## 📁 Estructura del Proyecto

```text
/
├── index.html     # Estructura principal (Pantalla de entrada, Contenido y Quiz)
├── styles.css     # Estilos globales, efectos neón y tema Cyberpunk
├── script.js     # Lógica interactiva (Inicio, Buscador y Quiz de 5 preguntas)
└── README.md      # Documentación del proyecto